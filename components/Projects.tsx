import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f4f0e7] px-8 py-28 text-[#182018]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#667653]">
              03. SELECTED WORK
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Things I&apos;ve built.
            </h2>

            <p className="mt-5 leading-7 text-[#62685e]">
              A selection of projects where I&apos;ve applied what I know,
              explored new technologies, and solved practical problems.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <Reveal delay={100}>
          <ProjectCard
            number="01"
            title="Scrabble Game"
            description="A full-stack Scrabble game featuring player authentication, multiplayer game sessions, word validation, scoring, and a responsive interactive board."
            highlights={[
              "Player authentication",
              "Multiplayer game sessions",
              "Word validation and scoring",
              "Responsive, interactive board",
            ]}
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Express",
              "MySQL",
            ]}
            githubUrl="https://github.com/Nour-Mistrah/Scrabble-Game"
            image="/nour-portfolio/scrabble-preview.png"
          />
        </Reveal>


<Reveal delay={200}>
  <ProjectCard
    number="02"
    title="Vicanza Trip Planner"
    description="My first university course project, developed collaboratively with my partner, Aya Alatrash. An Android travel planning application that allows users to explore destinations, browse travel packages, discover hotels and restaurants, and organize trips."
    highlights={[
      "User registration and authentication",
      "Travel packages and destination exploration",
      "Hotel and restaurant discovery",
      "Trip planning and reservations",
      "Collaborative university project",
    ]}
    technologies={[
      "Java",
      "XML",
      "Android",
      "PHP",
      "MySQL",
    ]}
    githubUrl="https://github.com/Nour-Mistrah/Vicanza-Trip-Planner"
    image="/nour-portfolio/vicanza-preview.png"
  />
</Reveal>
</div>

      </div>
    </section>
  );
}
