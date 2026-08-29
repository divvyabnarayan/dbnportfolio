import Image from "next/image";
import Link from "next/link";
import { aiExperiments } from "@/content/ai-experiments";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export function AiCodingView() {
  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <SiteNav activeHref="/ai-coding" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
        <Reveal>
          <h1 className="font-display max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            Where Design Meets AI
          </h1>
          <p className="mt-4 w-full text-base leading-relaxed text-ink-soft sm:text-lg">
            I am exploring how designers can use AI to move from pixels to
            products from designing, prototyping, coding to shipping ideas with
            AI as a creative and technical partner.
          </p>
        </Reveal>

        <ul className="mt-14 grid w-full grid-cols-3 gap-6 sm:mt-16 sm:gap-10">
          {aiExperiments.map((experiment, index) => {
            const isExternal = experiment.href?.startsWith("http");
            const Card = (
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_14px_36px_-24px_rgba(18,24,22,0.35)]">
                  <Image
                    src={experiment.image}
                    alt={experiment.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 33vw, 360px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    priority={index < 2}
                  />
                </div>

                <h2 className="font-display mt-4 text-base font-semibold tracking-[-0.02em] text-ink transition group-hover:text-accent sm:mt-5 sm:text-lg">
                  {experiment.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-muted sm:text-sm">
                  {experiment.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {experiment.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-line bg-white/70 px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-[0.1em] text-muted uppercase sm:text-[0.65rem]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            );

            return (
              <Reveal key={experiment.title} delay={index * 0.05} className="h-full">
                {experiment.href && experiment.href !== "#" ? (
                  isExternal ? (
                    <a
                      href={experiment.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                    >
                      {Card}
                    </a>
                  ) : (
                    <Link
                      href={experiment.href}
                      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                    >
                      {Card}
                    </Link>
                  )
                ) : (
                  Card
                )}
              </Reveal>
            );
          })}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
