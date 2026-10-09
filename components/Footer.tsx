import CurrentYear from "@/components/CurrentYear";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Nour-Mistrah" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nour-mistrah-22136b376/",
  },
  { label: "Email", href: "mailto:nurmistrah@gmail.com" },
];

const linkClass = "transition-colors duration-300 hover:text-[#9dbb72]";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#142019] px-8 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className={`text-lg font-semibold tracking-[0.15em] ${linkClass}`}
          >
            NOUR
          </a>
          <p className="mt-2 text-sm text-white/55">
            © <CurrentYear /> Nour Mistrah. All rights reserved.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/65"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <ul className="flex gap-6 text-sm text-white/65">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#home"
            className="group flex items-center gap-2 text-sm text-[#9dbb72]"
          >
            Back to top
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
