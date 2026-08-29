import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/content/site";

const links = [
  { label: "Work", href: "/#case-studies" },
  { label: "Design × AI", href: "/ai-coding" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/divya-resume.pdf" },
] as const;

export function SiteNav({ activeHref }: { activeHref?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-3.5 sm:px-8">
        <Link
          href="/"
          aria-label={site.fullName}
          className="text-accent transition hover:text-ink"
        >
          <BrandLogo className="h-9 w-9 sm:h-10 sm:w-10" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-ink-soft sm:flex">
          {links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition hover:text-ink ${
                  isActive ? "font-semibold text-ink" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/"
          className="text-sm font-medium text-muted transition hover:text-ink sm:hidden"
        >
          Home
        </Link>
      </div>
    </header>
  );
}
