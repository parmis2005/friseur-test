import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Unser Team</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
            Die Menschen hinter dem Handwerk
          </h2>
          <p className="mt-4 text-charcoal/70">
            Erfahren, freundlich und immer auf dem neuesten Stand der Technik.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-6 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-charcoal to-gold font-serif text-xl text-cream">
                {member.initials}
              </div>
              <h3 className="mt-4 font-serif text-lg text-charcoal">{member.name}</h3>
              <p className="text-sm font-medium text-gold">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
