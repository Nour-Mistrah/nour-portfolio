export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#142019]"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#9dbb72]/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-36 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-32">

        {/* LEFT SIDE — Introduction */}
        <div className="animate-fade-up">

          {/* Role label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#9dbb72] shadow-[0_0_12px_rgba(157,187,114,0.6)]" />

            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#c7d7a5] sm:text-sm">
              Software Developer
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-[#f4f0e7] sm:text-6xl xl:text-7xl">
            Nour
            <br />
            <span className="text-[#9dbb72]">
              Mistrah.
            </span>
          </h1>

          {/* Academic background */}
          <p className="mt-7 text-lg font-medium text-white/85">
            Computer Science &amp; Physics Graduate
          </p>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
            I turn ideas into functional applications, combining
            technical curiosity with analytical thinking and
            a passion for solving problems.
          </p>

          {/* Main buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group inline-flex items-center rounded-full bg-[#9dbb72] px-7 py-3 font-medium text-[#142019] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c7d7a5] hover:shadow-[0_10px_30px_rgba(157,187,114,0.25)]"
            >
              View Projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#9dbb72] hover:bg-white/10"
            >
              Contact Me
            </a>

          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">

            <a
              href="https://github.com/Nour-Mistrah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-[#9dbb72]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nour-mistrah-22136b376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-[#9dbb72]"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:nurmistrah@gmail.com"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-[#9dbb72]"
            >
              Email ↗
            </a>

          </div>
        </div>

        {/* RIGHT SIDE — Code editor */}
<div
  className="relative min-w-0 animate-fade-up"
  style={{ animationDelay: "200ms" }}
>
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 rounded-full bg-[#9dbb72]/5 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101914] shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#9dbb72]/30 hover:shadow-[0_35px_90px_rgba(0,0,0,0.4)]">

            {/* Editor title bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#1c2920] px-5 py-4">

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#e96b6b]" />
                <span className="h-3 w-3 rounded-full bg-[#d3a35f]" />
                <span className="h-3 w-3 rounded-full bg-[#9dbb72]" />
              </div>

              <span className="font-mono text-xs text-white/40">
                nour.ts
              </span>

              <span className="w-12" />
            </div>

            {/* Code content */}
            <div className="overflow-x-auto px-5 py-7 sm:px-7 sm:py-9">

              <pre className="font-mono text-[11px] leading-7 sm:text-sm sm:leading-8">
                <code>
                  <span className="text-[#d3a35f]">const</span>
                  <span className="text-white/85"> developer = {"{"}</span>
                  {"\n"}

                  <span className="text-[#9dbb72]">  name</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#b4c9ff]">
                    &quot;Nour Mistrah&quot;
                  </span>
                  <span className="text-white/60">,</span>
                  {"\n"}

                  <span className="text-[#9dbb72]">  role</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#b4c9ff]">
                    &quot;Software Developer&quot;
                  </span>
                  <span className="text-white/60">,</span>
                  {"\n\n"}

                  <span className="text-[#9dbb72]">  education</span>
                  <span className="text-white/60">: [</span>
                  {"\n"}

                  <span className="text-[#b4c9ff]">
                    {"    "}&quot;Computer Science&quot;,
                  </span>
                  {"\n"}

                  <span className="text-[#b4c9ff]">
                    {"    "}&quot;Physics&quot;
                  </span>
                  {"\n"}

                  <span className="text-white/60">  ],</span>
                  {"\n\n"}

                  <span className="text-[#9dbb72]">  technologies</span>
                  <span className="text-white/60">: [</span>
                  {"\n"}

                  <span className="text-[#b4c9ff]">
                    {"    "}&quot;JavaScript&quot;,
                  </span>
                  {"\n"}

                  <span className="text-[#b4c9ff]">
                    {"    "}&quot;Java&quot;,
                  </span>
                  {"\n"}

                  <span className="text-[#b4c9ff]">
                    {"    "}&quot;Node.js&quot;,
                  </span>
                  {"\n"}

                  <span className="text-[#b4c9ff]">
                    {"    "}&quot;MySQL&quot;
                  </span>
                  {"\n"}

                  <span className="text-white/60">  ],</span>
                  {"\n\n"}

                  <span className="text-[#9dbb72]">  mindset</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#b4c9ff]">
                    &quot;Always learning&quot;
                  </span>
                  <span className="text-white/60">,</span>
                  {"\n"}

                  <span className="text-[#9dbb72]">  lovesBuilding</span>
                  <span className="text-white/60">: </span>
                  <span className="text-[#d3a35f]">true</span>
                  {"\n"}

<span className="text-white/85">{"};"}</span>
<span
  aria-hidden="true"
  className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-[#9dbb72]"
/>                </code>
              </pre>

            </div>

            {/* Editor status bar */}
            <div className="flex items-center justify-between border-t border-white/10 bg-[#1c2920] px-5 py-3">

              <span className="flex items-center gap-2 text-xs text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9dbb72]" />
                Ready to build
              </span>

              <span className="font-mono text-xs text-white/40">
                TypeScript
              </span>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}