import Image from "next/image";
import { caseStudies, otherProjects } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ViewCaseStudyCursor } from "@/components/ViewCaseStudyCursor";
import { withBasePath } from "@/lib/basePath";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p
          id="case-studies-heading"
          className="text-sm font-medium tracking-[0.16em] text-muted"
        >
          CASE STUDIES
        </p>
      </Reveal>

      <div className="mt-10 space-y-16 sm:mt-14 sm:space-y-24">
        {caseStudies.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <article className="group border-t border-line pt-8">
              <ViewCaseStudyCursor
                href={project.href}
                className="block outline-none [@media(hover:hover)_and_(pointer:fine)]:cursor-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_50px_-28px_rgba(18,24,22,0.45)]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                </div>

                <div className="mt-6 sm:mt-8">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink transition group-hover:text-accent sm:text-4xl">
                      {project.title}
                    </h2>
                    <span className="text-sm font-medium text-accent transition group-hover:translate-x-1 md:hidden">
                      View Case Study →
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
                    {project.description}
                  </p>
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label={`${project.title} tags`}
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-paper/80 px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </ViewCaseStudyCursor>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 sm:mt-32">
        <p className="text-sm font-medium tracking-[0.16em] text-muted">
          OTHER PROJECTS
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {otherProjects.map((project) => {
            const isExternal = project.href.startsWith("http");

            return (
            <li key={project.title}>
              <a
                href={withBasePath(project.href)}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col gap-4 px-4 py-6 transition hover:bg-white/50 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-surface sm:h-20 sm:w-28">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      unoptimized
                      sizes="112px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.context}</p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="self-end text-xl text-muted transition group-hover:translate-x-1 group-hover:text-accent sm:self-center"
                >
                  →
                </span>
              </a>
            </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
