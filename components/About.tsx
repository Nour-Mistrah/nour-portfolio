import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f0e7] px-8 py-28 text-[#182018]"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">

        {/* LEFT */}
        <Reveal>
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#667653]">
            01. ABOUT ME
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Curious by nature.
            <br />
            Developer by choice.
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-[#4f564d]">
            <p>
              I&apos;m a Computer Science and Physics graduate with a strong
              interest in software development, problem solving, and learning
              new technologies.
            </p>

            <p>
              I enjoy turning ideas into working applications and understanding
              not only how something works, but why it works.
            </p>

            <p>
              My background in both computing and physics has shaped the way I
              approach problems: logically, curiously, and with a willingness
              to keep experimenting until I find a solution.
            </p>
          </div>
        </Reveal>

        {/* RIGHT */}
<div className="relative flex items-center">
  <div className="grid w-full gap-4 sm:grid-cols-2">

    {/* CLEAN CODE */}
    <div className="group rounded-3xl bg-[#faf8f2] p-7 shadow-[0_10px_40px_rgba(20,32,25,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(20,32,25,0.12)]">
      <span className="inline-block text-3xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        &lt;/&gt;
      </span>

      <h3 className="mt-7 text-lg font-semibold">
        Clean Code
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#73796f]">
        Building readable and maintainable solutions while continuously
        improving the way I write software.
      </p>
    </div>


    {/* PROBLEM SOLVER */}
    <div className="group rounded-3xl bg-[#dfe6cf] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#d4dfbf] hover:shadow-[0_20px_50px_rgba(20,32,25,0.10)] sm:translate-y-8 sm:hover:translate-y-6">
      <span className="inline-block text-3xl transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
        ◇
      </span>

      <h3 className="mt-7 text-lg font-semibold">
        Problem Solver
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#596052]">
        Breaking complicated problems into smaller pieces and working
        toward practical solutions.
      </p>
    </div>


    {/* ALWAYS LEARNING */}
    <div className="group rounded-3xl border border-[#182018]/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#9dbb72] hover:bg-[#faf8f2] hover:shadow-[0_20px_50px_rgba(20,32,25,0.08)]">
      <span className="inline-block text-3xl transition-all duration-500 group-hover:scale-125">
        ∞
      </span>

      <h3 className="mt-7 text-lg font-semibold">
        Always Learning
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#73796f]">
        Exploring new technologies and strengthening my skills through
        hands-on projects.
      </p>
    </div>


    {/* MY APPROACH */}
    <div className="group rounded-3xl bg-[#182018] p-7 text-[#f4f0e7] transition-all duration-500 hover:-translate-y-2 hover:bg-[#213026] hover:shadow-[0_20px_50px_rgba(20,32,25,0.18)] sm:translate-y-8 sm:hover:translate-y-6">

      <p className="text-xs tracking-[0.25em] text-[#9dbb72] transition-all duration-500 group-hover:tracking-[0.35em]">
        MY APPROACH
      </p>

      <p className="mt-6 text-xl leading-8">
        Think deeply.
        <br />
        Build carefully.
        <br />
        Keep improving.
      </p>

      <div className="mt-6 h-px w-10 bg-[#9dbb72] transition-all duration-500 group-hover:w-24" />
    </div>

  </div>
</div>

      </div>
    </section>
  );
}