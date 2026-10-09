import Reveal from "@/components/Reveal";

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    university: "Lebanese University",
    faculty: "Faculty of Sciences",
    year: "2026",
    description:
      "Built a foundation in programming, algorithms, data structures, databases, and software development.",
  },
  {
    degree: "Bachelor's Degree in Physics",
    university: "Lebanese University",
    faculty: "Faculty of Sciences",
    year: "2019",
    description:
      "Developed strong analytical thinking, mathematical reasoning, and problem-solving skills.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#e9ede3] px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#667653]">
              04. EDUCATION
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#182018] md:text-5xl">
              Where I started.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#62685e]">
              Two academic backgrounds that shaped the way I think,
              approach challenges, and solve problems.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative ml-3 border-l-2 border-[#9dbb72]/50 pl-8 md:ml-5 md:pl-12">

          {education.map((item, index) => (
            <Reveal key={item.year} delay={index * 150}>
              <div className="relative mb-10 last:mb-0">

                {/* Timeline dot */}
                <div className="absolute -left-[43px] top-8 h-5 w-5 rounded-full border-4 border-[#e9ede3] bg-[#667653] md:-left-[59px]" />

                {/* Education card */}
                <div className="rounded-3xl border border-[#182018]/10 bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(20,32,25,0.10)] md:p-10">

                  <span className="inline-block rounded-full bg-[#e5eadb] px-4 py-2 text-sm font-medium text-[#46503f]">
                    {item.year}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold text-[#182018]">
                    {item.degree}
                  </h3>

                  <p className="mt-3 font-medium text-[#667653]">
                    {item.university}
                  </p>

                  <p className="mt-1 text-sm text-[#73796f]">
                    {item.faculty}
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-[#62685e]">
                    {item.description}
                  </p>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}