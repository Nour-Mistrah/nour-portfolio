import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#142019] px-8 py-28 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#9dbb72]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <Reveal>
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#9dbb72]">
            05. CONTACT
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Let&apos;s build something
            <span className="text-[#9dbb72]"> together.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            I&apos;m open to opportunities where I can contribute,
            learn, and grow as a developer. Have a project,
            opportunity, or question? I&apos;d love to hear from you.
          </p>
        </Reveal>

        {/* Contact links */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          <Reveal delay={100}>
            <a
              href="mailto:nurmistrah@gmail.com"
              className="group block rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#9dbb72]/50 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#9dbb72]">
                Email
              </p>

              <p className="mt-4 break-all text-lg font-medium">
                nurmistrah@gmail.com
              </p>

              <p className="mt-5 text-sm text-white/50 transition-colors group-hover:text-[#9dbb72]">
                Send me an email ↗
              </p>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="https://github.com/Nour-Mistrah"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#9dbb72]/50 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#9dbb72]">
                GitHub
              </p>

              <p className="mt-4 text-lg font-medium">
                Nour-Mistrah
              </p>

              <p className="mt-5 text-sm text-white/50 transition-colors group-hover:text-[#9dbb72]">
                Explore my code ↗
              </p>
            </a>
          </Reveal>

          <Reveal delay={300}>
            <a
              href="https://www.linkedin.com/in/nour-mistrah-22136b376/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#9dbb72]/50 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#9dbb72]">
                LinkedIn
              </p>

              <p className="mt-4 text-lg font-medium">
                Nour Mistrah
              </p>

              <p className="mt-5 text-sm text-white/50 transition-colors group-hover:text-[#9dbb72]">
                Let&apos;s connect ↗
              </p>
            </a>
          </Reveal>

        </div>

      </div>
    </section>
  );
}