
import ProjectImage from "@/components/ProjectImage";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  highlights,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#182018]/10 bg-[#faf8f2] transition-all duration-500 hover:-translate-y-2 hover:border-[#9dbb72]/50 hover:shadow-[0_24px_60px_rgba(20,32,25,0.12)]">

      {/* Screenshot area */}
      <div className="flex h-64 items-center justify-center overflow-hidden bg-[#e8e9df] p-5 sm:h-72">
        {image && (
          <div className="flex h-full w-full items-center justify-center [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain">
            <ProjectImage
              src={image}
              alt={`${title} project preview`}
            />
          </div>
        )}
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#667653]">
          PROJECT {number}
        </p>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#182018] sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#62685e] sm:text-base">
          {description}
        </p>

        {/* Technologies */}
        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-[#182018]/10 bg-[#f0f1e8] px-3 py-1.5 text-xs font-medium text-[#46503f]"
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* Expandable project features */}
        {highlights && highlights.length > 0 && (
          <details className="mt-6 border-t border-[#182018]/10 pt-5">
            <summary className="cursor-pointer text-sm font-medium text-[#46503f] transition-colors hover:text-[#667653]">
              Explore project features
            </summary>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#62685e]">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#667653]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
        )}

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#182018] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#304535]"
            >
              View on GitHub ↗
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#182018]/20 px-5 py-3 text-sm font-medium text-[#182018] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e5eadb]"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
