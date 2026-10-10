import Image from "next/image";
import { caseStudies } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ViewCaseStudyCursor } from "@/components/ViewCaseStudyCursor";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p
          id="case-studies-heading"
          className="text-sm font-medium tracking-[0.16em] text-muted"
        >
          CASE STUDIES
        </p>
      </Reveal>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
        {caseStudies.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <article className="group h-full w-full">
              <ViewCaseStudyCursor
                href={project.href}
                className="block h-full w-full outline-none [@media(hover:hover)_and_(pointer:fine)]:cursor-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_50px_-28px_rgba(18,24,22,0.45)]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1152px) 50vw, 560px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                </div>

                <div className="mt-5 w-full min-w-0 sm:mt-6">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink transition group-hover:text-accent sm:text-3xl">
                      {project.title}
                    </h2>
                    <span className="text-sm font-medium text-accent transition group-hover:translate-x-1 md:hidden">
                      View Case Study →
                    </span>
                  </div>
                  <p className="mt-3 w-full max-w-full text-pretty break-words text-base leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <ul
                    className="mt-3 flex flex-wrap gap-2"
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
    </section>
  );
}
