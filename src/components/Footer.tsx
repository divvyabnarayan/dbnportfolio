import { footer, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-line bg-[linear-gradient(180deg,rgba(18,24,22,0.96),#0d1210)] text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.28),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-6 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-medium tracking-[0.16em] text-glow/80 uppercase">
          {footer.eyebrow}
        </p>

        <h2 className="font-display mt-6 max-w-3xl text-[clamp(2.4rem,8vw,4.75rem)] leading-[1.12] font-semibold tracking-[-0.04em]">
          {footer.headline.replace("👀", "").trimEnd()}{" "}
          <span
            aria-hidden
            className="footer-eye-blink inline-block"
          >
            👀
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-paper/75">{footer.subline}</p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex w-fit items-center rounded-full bg-glow px-5 py-3 text-sm font-semibold text-ink transition hover:translate-y-[-2px] hover:bg-white"
        >
          Get in touch
        </a>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-paper/50">
            © {year} | Built from ideas that refused to stay ideas.
          </p>
          <nav aria-label="Social" className="flex flex-wrap gap-4 text-sm font-medium">
            {footer.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-paper/70 transition hover:text-glow"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
