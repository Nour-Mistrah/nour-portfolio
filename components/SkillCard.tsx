type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-[#182018]/10 bg-[#faf8f2] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-[#182018]">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
className="cursor-default rounded-full bg-[#e5eadb] px-4 py-2 text-sm text-[#46503f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#182018] hover:text-[#f4f0e7]"          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}