"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock, X } from "lucide-react";
import { salon, serviceTabs, type ServiceItem } from "@/lib/data";

type BookingService = ServiceItem & {
  id: string;
  group: string;
};

type SlotDay = {
  iso: string;
  label: string;
  dateLabel: string;
  slots: string[];
};

const stepLabels = ["Leistung wählen", "Termin auswählen", "Bestätigung"];
const dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const monthNames = ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."];

function makeServiceId(groupId: string, name: string) {
  return `${groupId}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function formatPrice(price: string) {
  return price.replace("ab ", "");
}

function getSlots(date: Date, duration: string) {
  const day = date.getDay();
  if (day === 0 || day === 1) return [];
  const longService = Number.parseInt(duration, 10) >= 90;

  if (day === 6) {
    return longService ? ["09:00", "11:30"] : ["09:00", "09:45", "10:30", "11:15", "12:00", "13:00", "14:00"];
  }

  return longService
    ? ["09:30", "12:00", "14:30", "16:30"]
    : ["09:00", "09:30", "10:00", "10:45", "11:30", "12:15", "14:00", "14:45", "15:30", "16:15", "17:00", "17:45"];
}

function buildDays(weekOffset: number, duration: string): SlotDay[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + weekOffset * 7 + index);
    return {
      iso: date.toISOString(),
      label: dayNames[date.getDay()],
      dateLabel: `${String(date.getDate()).padStart(2, "0")}. ${monthNames[date.getMonth()]}`,
      slots: getSlots(date, duration),
    };
  });
}

export default function BookingModal() {
  const services = useMemo<BookingService[]>(
    () =>
      serviceTabs.flatMap((tab) =>
        tab.items.map((item) => ({
          ...item,
          id: makeServiceId(tab.id, item.name),
          group: tab.label,
        })),
      ),
    [],
  );

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0]?.id ?? "");
  const [selectedSlot, setSelectedSlot] = useState<{ day: SlotDay; time: string } | null>(null);
  const [booked, setBooked] = useState(false);

  const selectedService = services.find((service) => service.id === selectedServiceId) ?? services[0]!;
  const days = useMemo(() => buildDays(weekOffset, selectedService.duration), [weekOffset, selectedService.duration]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest("[data-booking-trigger]");
      if (!trigger) return;
      event.preventDefault();
      setOpen(true);
      setBooked(false);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function chooseService(serviceId: string) {
    setSelectedServiceId(serviceId);
    setSelectedSlot(null);
    setWeekOffset(0);
    setStep(2);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBooked(true);
    setStep(3);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-charcoal/70 px-3 py-4 backdrop-blur-sm sm:px-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Online Terminbuchung"
        className="mx-auto flex h-full max-w-[92rem] flex-col overflow-hidden rounded-[1.5rem] bg-cream shadow-2xl shadow-black/35 sm:rounded-[2rem]"
      >
        <div className="flex items-start justify-between gap-6 border-b border-charcoal/10 px-5 py-5 sm:px-7 lg:px-10">
          <div>
            <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Online Terminbuchung</p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              Angebot und freien Termin wählen
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-gold hover:text-gold"
            aria-label="Terminbuchung schließen"
          >
            <X size={22} />
          </button>
        </div>

        <div className="grid border-b border-charcoal/10 text-sm font-semibold text-charcoal/45 sm:grid-cols-3">
          {stepLabels.map((label, index) => {
            const number = index + 1;
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (number === 1 || number === 2 || selectedSlot) setStep(number);
                }}
                className={`px-5 py-4 text-left transition-colors sm:px-7 lg:px-10 ${
                  step === number ? "bg-cream-dark/45 text-gold" : "hover:bg-cream-dark/25"
                }`}
              >
                {number}. {label}
              </button>
            );
          })}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7 lg:p-10">
          <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
            <div className="rounded-2xl border border-charcoal/10 bg-cream/80 p-5 shadow-sm sm:p-7">
              {step === 1 && (
                <>
                  <h3 className="font-serif text-3xl text-charcoal">Leistung auswählen</h3>
                  <p className="mt-2 text-sm text-charcoal/60">
                    Wählen Sie zuerst das Angebot. Danach zeigen wir passende freie Zeiten.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => chooseService(service.id)}
                        className={`rounded-xl border p-4 text-left transition-colors ${
                          service.id === selectedServiceId
                            ? "border-gold bg-gold/10"
                            : "border-charcoal/10 bg-cream-dark/25 hover:border-gold/70"
                        }`}
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-gold">{service.group}</span>
                        <span className="mt-2 block font-medium text-charcoal">{service.name}</span>
                        <span className="mt-1 block text-sm text-charcoal/58">{service.description}</span>
                        <span className="mt-4 flex items-center justify-between text-sm">
                          <span className="inline-flex items-center gap-1.5 text-charcoal/55">
                            <Clock size={14} />
                            {service.duration}
                          </span>
                          <span className="font-serif text-lg text-gold">{service.price}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-charcoal"
                      >
                        <ChevronLeft size={17} />
                        Angebot wechseln
                      </button>
                      <h3 className="mt-7 font-serif text-3xl text-charcoal">Freie Termine</h3>
                      <p className="mt-2 text-charcoal/60">{selectedService.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setWeekOffset((value) => Math.max(0, value - 1))}
                        disabled={weekOffset === 0}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-gold hover:text-gold disabled:opacity-35"
                        aria-label="Vorherige Woche"
                      >
                        <ChevronLeft size={21} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setWeekOffset((value) => value + 1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-gold hover:text-gold"
                        aria-label="Nächste Woche"
                      >
                        <ChevronRight size={21} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-charcoal/10 pt-7">
                    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
                      {days.map((day) => (
                        <div key={day.iso}>
                          <div className="mb-4 text-center">
                            <p className="font-semibold text-charcoal">{day.label}</p>
                            <p className="mt-1 text-sm text-charcoal/50">{day.dateLabel}</p>
                          </div>
                          <div className="space-y-2">
                            {day.slots.length > 0 ? (
                              day.slots.map((time) => {
                                const active = selectedSlot?.day.iso === day.iso && selectedSlot.time === time;
                                return (
                                  <button
                                    key={`${day.iso}-${time}`}
                                    type="button"
                                    onClick={() => setSelectedSlot({ day, time })}
                                    className={`h-11 w-full rounded-lg text-sm font-semibold transition-colors ${
                                      active
                                        ? "bg-charcoal text-cream"
                                        : "bg-charcoal/8 text-charcoal hover:bg-gold hover:text-charcoal"
                                    }`}
                                  >
                                    {time}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="flex h-20 items-center justify-center rounded-lg border border-dashed border-charcoal/15 px-3 text-center text-sm text-charcoal/40">
                                Keine freien Termine
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="font-serif text-3xl text-charcoal">
                    {booked ? "Termin vorgemerkt" : "Kontaktdaten eingeben"}
                  </h3>
                  {booked ? (
                    <div className="mt-7 rounded-2xl border border-gold/35 bg-gold/10 p-6">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-charcoal">
                        <Check size={22} />
                      </div>
                      <p className="mt-5 font-medium text-charcoal">Vielen Dank. Ihre Terminauswahl wurde vorgemerkt.</p>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                        Für eine echte Online-Buchung müsste dieser Schritt noch mit einem Kalender- oder Buchungssystem
                        verbunden werden. Die Oberfläche ist dafür vorbereitet.
                      </p>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="mt-6 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-gold hover:text-charcoal"
                      >
                        Schließen
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-7 grid gap-3">
                      <input
                        required
                        type="text"
                        placeholder="Ihr Name"
                        className="rounded-lg border border-charcoal/12 bg-cream-dark/25 px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Ihre E-Mail"
                        className="rounded-lg border border-charcoal/12 bg-cream-dark/25 px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                      />
                      <input
                        type="tel"
                        placeholder="Telefonnummer"
                        className="rounded-lg border border-charcoal/12 bg-cream-dark/25 px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                      />
                      <textarea
                        rows={4}
                        placeholder="Hinweise zu Haarlänge, Farbe oder Wunschlook"
                        className="resize-none rounded-lg border border-charcoal/12 bg-cream-dark/25 px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                      />
                      <button
                        type="submit"
                        className="mt-3 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
                      >
                        Termin verbindlich anfragen
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>

            <aside className="self-start rounded-2xl bg-charcoal p-6 text-cream shadow-xl shadow-charcoal/20 lg:sticky lg:top-6">
              <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Deine Auswahl</p>
              <p className="mt-8 font-serif text-3xl text-gold-light">{formatPrice(selectedService.price)}</p>
              <p className="mt-2 text-lg text-cream">{selectedService.name}</p>
              <p className="mt-1 text-sm text-cream/55">{selectedService.group}</p>

              <div className="mt-8 divide-y divide-cream/10 text-sm">
                <div className="flex items-center justify-between gap-4 py-4">
                  <span className="text-cream/50">Dauer</span>
                  <span>{selectedService.duration}</span>
                </div>
                <div className="flex items-center justify-between gap-4 py-4">
                  <span className="text-cream/50">Termin</span>
                  <span className="text-right">
                    {selectedSlot ? `${selectedSlot.day.label}, ${selectedSlot.day.dateLabel} um ${selectedSlot.time}` : "Bitte Uhrzeit wählen"}
                  </span>
                </div>
                <div className="py-4">
                  <span className="inline-flex items-center gap-2 text-cream/55">
                    <CalendarDays size={15} className="text-gold" />
                    {salon.city}
                  </span>
                </div>
              </div>

              {step < 3 && (
                <button
                  type="button"
                  onClick={() => setStep(step === 1 ? 2 : 3)}
                  disabled={step === 2 && !selectedSlot}
                  className="mt-7 w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light disabled:bg-cream/18 disabled:text-cream/35"
                >
                  {step === 1 ? "Weiter zum Termin" : "Auswahl bestätigen"}
                </button>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
