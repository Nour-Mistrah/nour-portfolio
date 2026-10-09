import Reveal from "@/components/Reveal";
import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#ebe7dc] px-8 py-28 text-[#182018]"
    >
      <div className="mx-auto max-w-7xl">
<Reveal>
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#667653]">
            02. SKILLS
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Tools I work with.
          </h2>

          <p className="mt-5 leading-7 text-[#62685e]">
            Technologies I&apos;ve worked with through projects, coursework,
            and continuous learning.
          </p>
        </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
<Reveal>
          <SkillCard
            title="Languages"
            skills={[
              "Java",
              "JavaScript",
              "TypeScript",
              "Python",
              "C#",
            ]}
          />
          </Reveal>

<Reveal delay={100}>
          <SkillCard
            title="Frontend"
            skills={[
              "HTML",
              "CSS",
              "React",
              "Next.js",
              "Tailwind CSS",
            ]}
          />
            </Reveal>

<Reveal delay={200}>

          <SkillCard
            title="Backend"
            skills={[
              "Node.js",
              "Express",
            ]}
          />
            </Reveal>

<Reveal>
          <SkillCard
            title="Database"
            skills={[
              "MySQL",
              "SQL",
            ]}
          />
          </Reveal>

<Reveal delay={100}>
          <SkillCard
            title="Tools"
            skills={[
              "Git",
              "GitHub",
              "VS Code",
            ]}
          />
          </Reveal>

<Reveal delay={200}>
          <div className="rounded-3xl bg-[#182018] p-7 text-[#f4f0e7]">
            <p className="text-xs tracking-[0.25em] text-[#9dbb72]">
              CURRENTLY LEARNING
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              Modern Frontend Development
            </h3>

            <p className="mt-3 leading-7 text-white/60">
              Building this portfolio while learning React, Next.js,
              TypeScript, and Tailwind CSS.
            </p>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}