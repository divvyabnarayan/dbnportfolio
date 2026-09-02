import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudyDetail } from "@/content/case-studies";
import { getAdjacentCaseStudies } from "@/content/case-studies";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { IphoneMockupSlideshow } from "@/components/IphoneMockupSlideshow";
import { LaptopMockupSlideshow } from "@/components/LaptopMockupSlideshow";
import { SquareMockupSlideshow } from "@/components/SquareMockupSlideshow";
import { TypographyShowcase } from "@/components/TypographyShowcase";
import { IconsShowcase } from "@/components/IconsShowcase";
import { ButtonsShowcase } from "@/components/ButtonsShowcase";
import { ShadowsShowcase } from "@/components/ShadowsShowcase";
import { FlipComponentCollageFromImages } from "@/components/FlipComponentCollageFromImages";
import { WebsitePreview } from "@/components/WebsitePreview";
import { FidelityImageGrid } from "@/components/FidelityImageGrid";

type CaseStudyViewProps = {
  study: CaseStudyDetail;
};

function SystemLoopDiagram({
  title,
  steps,
  image,
}: {
  title?: string;
  steps: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}) {
  const [start, inhale, hold, exhale, wait, repeat] = steps;
  const ink = "#121816";
  const arrow = "#7b6cef";

  if (image) {
    return (
      <div className="overflow-hidden rounded-[1.75rem] border border-line bg-[#FDF8F7]">
        {title ? (
          <div className="border-b border-line bg-ink px-6 py-4 sm:px-8">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
              {title}
            </h3>
          </div>
        ) : null}
        <div className="px-4 py-8 sm:px-10 sm:py-12 lg:px-14">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1024}
            height={image.height ?? 286}
            unoptimized
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="mx-auto h-auto w-full max-w-3xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {title ? (
        <h3 className="mb-6 text-sm font-semibold tracking-[0.14em] text-ink uppercase">
          {title}
        </h3>
      ) : null}

      <svg
        viewBox="0 0 680 200"
        role="img"
        aria-label={`${start}, ${inhale}, ${hold}, ${exhale}, ${wait}, ${repeat} breathing loop`}
        className="mx-auto h-auto w-full max-w-3xl"
      >
        <defs>
          <marker
            id="system-loop-head"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M1 1.4 L9 5 L1 8.6 Z" fill={arrow} />
          </marker>
        </defs>

        {/* Start → Inhale → Hold → Exhale */}
        <line
          x1="122"
          y1="36"
          x2="178"
          y2="36"
          stroke={arrow}
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#system-loop-head)"
        />
        <line
          x1="275"
          y1="36"
          x2="330"
          y2="36"
          stroke={arrow}
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#system-loop-head)"
        />
        <line
          x1="410"
          y1="36"
          x2="470"
          y2="36"
          stroke={arrow}
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#system-loop-head)"
        />

        {/* Exhale ↓ Wait */}
        <line
          x1="530"
          y1="56"
          x2="530"
          y2="128"
          stroke={arrow}
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#system-loop-head)"
        />

        {/* Wait ← Repeat */}
        <line
          x1="485"
          y1="155"
          x2="365"
          y2="155"
          stroke={arrow}
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#system-loop-head)"
        />

        {/* Repeat → Start: smooth side arc, then a clean vertical tip under Start */}
        <path
          d="M 248 155 C 130 155 58 142 58 108 C 58 82 80 78 80 66"
          fill="none"
          stroke={arrow}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Arrowhead centered under Start, pointing straight up */}
        <path d="M80 50 L72.5 64 L87.5 64 Z" fill={arrow} />

        <text
          x="80"
          y="42"
          textAnchor="middle"
          fill={ink}
          style={{ fontSize: 26, fontWeight: 700, fontFamily: "inherit" }}
        >
          {start}
        </text>
        <text
          x="225"
          y="42"
          textAnchor="middle"
          fill={ink}
          style={{ fontSize: 26, fontWeight: 400, fontFamily: "inherit" }}
        >
          {inhale}
        </text>
        <text
          x="370"
          y="42"
          textAnchor="middle"
          fill={ink}
          style={{ fontSize: 26, fontWeight: 400, fontFamily: "inherit" }}
        >
          {hold}
        </text>
        <text
          x="530"
          y="42"
          textAnchor="middle"
          fill={ink}
          style={{ fontSize: 26, fontWeight: 400, fontFamily: "inherit" }}
        >
          {exhale}
        </text>
        <text
          x="530"
          y="162"
          textAnchor="middle"
          fill={ink}
          style={{ fontSize: 26, fontWeight: 400, fontFamily: "inherit" }}
        >
          {wait}
        </text>
        <text
          x="310"
          y="162"
          textAnchor="middle"
          fill={ink}
          style={{ fontSize: 26, fontWeight: 700, fontFamily: "inherit" }}
        >
          {repeat}
        </text>
      </svg>
    </div>
  );
}

export function CaseStudyView({ study }: CaseStudyViewProps) {
  const { previous, next } = getAdjacentCaseStudies(study.slug);
  const sectionClass = "mx-auto w-full max-w-6xl px-6 sm:px-8";
  const statementGlowClass = study.headingColor
    ? "pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(65,0,163,0.28),transparent_70%)] blur-2xl"
    : "pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,164,90,0.35),transparent_70%)] blur-2xl";

  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <SiteNav />

      <article
        className={`flex flex-1 flex-col gap-y-16 pb-16 sm:gap-y-24 sm:pb-24${
          study.headingColor
            ? " [&_.case-accent-num]:text-[color:var(--case-heading)] [&_.case-section-label]:text-[color:var(--case-heading)]"
            : ""
        }${
          study.cardStrokeColor
            ? " [&_.case-card]:border-[color:var(--case-stroke)]"
            : ""
        }`}
        style={
          study.headingColor || study.cardStrokeColor
            ? ({
                ...(study.headingColor
                  ? { ["--case-heading"]: study.headingColor }
                  : {}),
                ...(study.cardStrokeColor
                  ? { ["--case-stroke"]: study.cardStrokeColor }
                  : {}),
              } as CSSProperties)
            : undefined
        }
      >
        <header className="mx-auto w-full max-w-6xl px-6 pt-14 sm:px-8 sm:pt-20">
          <Reveal>
            <p className="case-section-label text-sm font-medium tracking-[0.14em] text-muted uppercase">
              Case study
            </p>
            <h1 className="font-serif mt-4 text-[clamp(2.1rem,6vw,3.65rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              {study.buildingTitle}
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              {study.subtitle}
            </p>
          </Reveal>

          <Reveal className="mt-10 sm:mt-12" delay={0.05}>
            <div
              className="relative overflow-hidden rounded-[1.75rem] border border-black/5 shadow-[0_24px_60px_-32px_rgba(18,24,22,0.45)]"
              style={{ backgroundColor: study.heroBackground }}
            >
              <div className="relative aspect-[16/9] w-full">
                {study.heroCollage ? (
                  <FlipComponentCollageFromImages />
                ) : (
                  <Image
                    src={study.heroImage}
                    alt={study.heroImageAlt}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-cover object-top"
                  />
                )}
              </div>
            </div>
          </Reveal>
        </header>

        <section className={`${sectionClass} grid gap-10 sm:grid-cols-[1.2fr_0.8fr] sm:gap-14`}>
          <Reveal>
            <p className="font-serif text-[calc(1.35rem+6pt)] leading-snug font-semibold tracking-[-0.02em] text-ink sm:text-[calc(1.6rem+6pt)]">
              {study.intro}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="divide-y divide-line border-y border-line">
              {study.meta.map((item) => (
                <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4 sm:items-center">
                  <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                    {item.tools?.length ? (
                      <ul className="flex flex-wrap items-center gap-3" aria-label={item.tools.map((tool) => tool.name).join(", ")}>
                        {item.tools.map((tool) => (
                          <li key={tool.name} className="relative aspect-square h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              fill
                              unoptimized
                              sizes="36px"
                              className="object-cover"
                              title={tool.name}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {study.whatIs ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                overview
              </p>
              <h2 className="font-serif mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.whatIs.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.whatIs.body}
              </p>
              {study.confidentialityNote ? (
                <p className="mt-5 text-sm italic text-muted">
                  {study.confidentialityNote}
                </p>
              ) : null}
            </Reveal>
          </section>
        ) : null}

        {study.confidentialityNote && !study.whatIs ? (
          <p className="mx-auto max-w-6xl px-6 text-sm italic text-muted sm:px-8">
            {study.confidentialityNote}
          </p>
        ) : null}

        {study.challenge ? (
          <section className={sectionClass}>
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.challenge.heading}
              </h2>
              {study.challenge.intro ? (
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.challenge.intro}
                </p>
              ) : null}
            </Reveal>

            {study.challenge.statement ? (
              <section className="relative mt-10 px-0 py-10 sm:mt-12 sm:py-16">
                <div
                  aria-hidden
                  className={statementGlowClass}
                />
                <Reveal className="relative mx-auto max-w-6xl text-center">
                  {study.challenge.statementLabel ? (
                    <p className="mb-5 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {study.challenge.statementLabel}
                    </p>
                  ) : null}
                  <p className="font-serif text-[clamp(1.35rem,4vw,2.2rem)] leading-snug font-semibold tracking-[-0.02em] text-ink">
                    {study.challenge.statement}
                  </p>
                </Reveal>
              </section>
            ) : null}

            <Reveal className={study.challenge.statement ? "mt-4 sm:mt-6" : "mt-5"}>
              <p className="whitespace-pre-line text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.challenge.body}
              </p>
            </Reveal>

            {study.challenge.cards?.length ? (
              <Reveal className="mt-8 sm:mt-10">
                <ol className="grid gap-4 sm:grid-cols-2">
                  {study.challenge.cards.map((card, index) => (
                    <li
                      key={card}
                      className="case-card flex gap-4 rounded-2xl border border-line bg-white/70 p-5 text-sm leading-relaxed text-ink-soft sm:text-base"
                    >
                      <span className="case-accent-num font-serif text-lg font-semibold text-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{card}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ) : null}

            {study.challenge.closing ? (
              <Reveal className="mt-8 sm:mt-10">
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.challenge.closing}
                </p>
              </Reveal>
            ) : null}
          </section>
        ) : null}

        {study.howMightWe ? (
        <section className={`relative ${sectionClass}`}>
          <div
            aria-hidden
            className={statementGlowClass}
          />
          <Reveal className="relative mx-auto max-w-6xl text-center">
            {study.howMightWeLabel ? (
              <p className="mb-5 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.howMightWeLabel}
              </p>
            ) : null}
            <p className="font-serif text-[clamp(1.35rem,4vw,2.2rem)] leading-snug font-semibold tracking-[-0.02em] text-ink">
              {study.howMightWe}
            </p>
          </Reveal>
        </section>

        ) : null}

        {study.howMightWeImages?.length ? (
          <section className={sectionClass}>
            <div className="space-y-6">
              {study.howMightWeImages.map((image, index) => (
                <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {study.primaryResearch ? (
          <section className={sectionClass}>
            <Reveal>
              {study.primaryResearch.label ? (
                <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {study.primaryResearch.label}
                </p>
              ) : null}
              {study.primaryResearch.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.primaryResearch.heading}
                </h2>
              ) : null}
              {study.primaryResearch.body ? (
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.primaryResearch.body}
                </p>
              ) : null}
            </Reveal>

            {study.primaryResearch.cards?.length ? (
              <div
                className={
                  study.primaryResearch.heading || study.primaryResearch.body
                    ? "mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
                    : "mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
                }
              >
                {study.primaryResearch.cards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.04}>
                    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.04] bg-white shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)]">
                      <div className="relative aspect-[4/3] bg-surface">
                        <Image
                          src={card.image.src}
                          alt={card.image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1024px) 50vw, 360px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <h3 className="text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] text-ink">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {card.body}
                        </p>
                        {card.relevance ? (
                          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                            <span className="font-semibold text-ink">
                              Relevance:{" "}
                            </span>
                            {card.relevance}
                          </p>
                        ) : null}
                        {card.influence ? (
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                            <span className="font-semibold text-ink">
                              Influence:{" "}
                            </span>
                            {card.influence}
                          </p>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            ) : null}

            {study.primaryResearch.images?.length ? (
              <div
                className={
                  study.primaryResearch.cards?.length
                    ? "mt-10 space-y-6 sm:mt-12"
                    : study.primaryResearch.heading || study.primaryResearch.body
                      ? "mt-10 space-y-6 sm:mt-12"
                      : "mt-6 space-y-6 sm:mt-8"
                }
              >
                {study.primaryResearch.images.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    {image.objectFit === "contain" ? (
                      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1600}
                          height={image.height ?? 900}
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.userPersonas ? (
          <section className={sectionClass}>
            <Reveal>
              {study.userPersonas.label ? (
                <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {study.userPersonas.label}
                </p>
              ) : null}
              {study.userPersonas.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.userPersonas.heading}
                </h2>
              ) : null}
              {study.userPersonas.body ? (
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.userPersonas.body}
                </p>
              ) : null}
            </Reveal>

            {study.userPersonas.cards?.length ? (
              <Reveal
                className={
                  study.userPersonas.heading || study.userPersonas.body
                    ? "mt-10 sm:mt-12"
                    : "mt-6 sm:mt-8"
                }
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                  {study.userPersonas.cards.map((card) => (
                    <article
                      key={card.title}
                      className="rounded-[1.75rem] border border-black/[0.04] bg-white p-7 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] sm:p-8"
                    >
                      <PersonaCardIcon name={card.icon} />
                      <h3 className="mt-5 text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] text-ink">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                        {card.body}
                      </p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {study.userPersonas.images?.length ? (
              <Reveal
                className={
                  study.userPersonas.cards?.length
                    ? "mt-10 sm:mt-12"
                    : study.userPersonas.heading || study.userPersonas.body
                      ? "mt-10 sm:mt-12"
                      : "mt-6 sm:mt-8"
                }
              >
                <ImageSlideshow images={study.userPersonas.images} />
              </Reveal>
            ) : null}
          </section>
        ) : null}

        {study.journeyMapping ? (
          <section className={sectionClass}>
            <Reveal>
              {study.journeyMapping.label ? (
                <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {study.journeyMapping.label}
                </p>
              ) : null}
              {study.journeyMapping.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.journeyMapping.heading}
                </h2>
              ) : null}
              {study.journeyMapping.subheading ? (
                <h3
                  className={`font-serif text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl ${
                    study.journeyMapping.heading ? "mt-8 sm:mt-10" : ""
                  }`}
                >
                  {study.journeyMapping.subheading}
                </h3>
              ) : null}
              {study.journeyMapping.body ? (
                (Array.isArray(study.journeyMapping.body)
                  ? study.journeyMapping.body
                  : [study.journeyMapping.body]
                ).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                      index === 0
                        ? study.journeyMapping?.heading ||
                          study.journeyMapping?.subheading
                          ? "mt-5"
                          : ""
                        : "mt-4"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : null}
            </Reveal>

            {study.journeyMapping.colorPalettes?.length ? (
              <div className="mt-10 space-y-10 sm:mt-12">
                {study.journeyMapping.colorPalettes.map((palette) => (
                  <Reveal key={palette.title}>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                      {palette.title}
                    </h3>
                    <div className="mt-6 space-y-8">
                      {(palette.groups ?? [{ label: "", colors: palette.colors ?? [] }]).map(
                        (group) => (
                          <div key={`${palette.title}-${group.label}`}>
                            {group.label ? (
                              <p className="mb-4 text-sm font-medium text-muted">
                                {group.label}
                              </p>
                            ) : null}
                            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:gap-5">
                              {group.colors.map((color) => (
                                <div
                                  key={`${group.label}-${color.hex}-${color.hexEnd ?? ""}`}
                                  className="text-center"
                                >
                                  <div
                                    className="aspect-square w-full rounded-2xl border border-black/10 shadow-sm"
                                    style={
                                      color.hexEnd
                                        ? {
                                            backgroundImage: `linear-gradient(180deg, ${color.hex} 0%, ${color.hexEnd} 100%)`,
                                          }
                                        : { backgroundColor: color.hex }
                                    }
                                  />
                                  <p className="mt-2 font-mono text-xs text-ink sm:text-sm">
                                    {color.hexEnd
                                      ? `${color.hex} → ${color.hexEnd}`
                                      : color.hex}
                                  </p>
                                  {color.label ? (
                                    <p className="mt-1 text-xs text-muted">{color.label}</p>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}

            {study.journeyMapping.cards?.length ? (
              <Reveal className="mt-10 sm:mt-12">
                <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
                  {study.journeyMapping.cards.map((card) => (
                    <article
                      key={card}
                      className="flex items-center justify-center rounded-[1.5rem] border border-[#7B6CF0]/45 bg-[#7B6CF0] px-6 py-8 text-center shadow-[0_0_28px_rgba(123,108,240,0.28)] sm:px-8 sm:py-10"
                    >
                      <h3 className="text-sm font-bold tracking-[0.08em] text-white uppercase sm:text-[0.95rem]">
                        {card}
                      </h3>
                    </article>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {study.journeyMapping.images?.length ? (
              <div
                className={
                  study.journeyMapping.heading ||
                  study.journeyMapping.body ||
                  study.journeyMapping.cards?.length
                    ? "mt-10 space-y-6 sm:mt-12"
                    : "mt-6 space-y-6 sm:mt-8"
                }
              >
                {study.journeyMapping.images.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    {image.objectFit === "contain" ? (
                      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1600}
                          height={image.height ?? 900}
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.typography ? (
          <section className={sectionClass}>
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.typography.heading}
              </h2>
              {study.typography.body ? (
                (Array.isArray(study.typography.body)
                  ? study.typography.body
                  : [study.typography.body]
                ).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                      index === 0 ? "mt-5" : "mt-4"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : null}
            </Reveal>

            <Reveal className="mt-10 sm:mt-12">
              <TypographyShowcase typography={study.typography} />
            </Reveal>
          </section>
        ) : null}

        {study.icons ? (
          <section className={sectionClass}>
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.icons.heading}
              </h2>
              {study.icons.body ? (
                (Array.isArray(study.icons.body)
                  ? study.icons.body
                  : [study.icons.body]
                ).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                      index === 0 ? "mt-5" : "mt-4"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : null}
            </Reveal>

            <Reveal className="mt-10 sm:mt-12">
              <IconsShowcase icons={study.icons} />
            </Reveal>
          </section>
        ) : null}

        {study.buttons ? (
          <section className={sectionClass}>
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.buttons.heading}
              </h2>
              {study.buttons.body ? (
                (Array.isArray(study.buttons.body)
                  ? study.buttons.body
                  : [study.buttons.body]
                ).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                      index === 0 ? "mt-5" : "mt-4"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : null}
            </Reveal>

            <Reveal className="mt-10 sm:mt-12">
              <ButtonsShowcase />
            </Reveal>
          </section>
        ) : null}

        {study.shadows ? (
          <section className={sectionClass}>
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.shadows.heading}
              </h2>
              {study.shadows.body ? (
                (Array.isArray(study.shadows.body)
                  ? study.shadows.body
                  : [study.shadows.body]
                ).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                      index === 0 ? "mt-5" : "mt-4"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : null}
            </Reveal>

            <Reveal className="mt-10 sm:mt-12">
              <ShadowsShowcase shadows={study.shadows} />
            </Reveal>
          </section>
        ) : null}

        {study.needsAndFunctions ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.needsAndFunctions.label}
              </p>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.needsAndFunctions.body}
              </p>
            </Reveal>

            {study.needsAndFunctions.images?.length ? (
              <Reveal className="mt-8 sm:mt-10">
                <ImageSlideshow
                  images={study.needsAndFunctions.images}
                  objectFit="contain"
                />
              </Reveal>
            ) : null}

            {study.needsAndFunctions.items?.length ? (
              <Reveal className="mt-8 sm:mt-10">
                <ol className="grid gap-4 sm:grid-cols-2">
                  {study.needsAndFunctions.items.map((item, index) => (
                    <li
                      key={item}
                      className="case-card flex gap-4 rounded-2xl border border-line bg-white/70 p-5 text-sm leading-relaxed text-ink-soft sm:text-base"
                    >
                      <span className="case-accent-num font-serif text-lg font-semibold text-ink">
                        {index + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ) : null}
          </section>
        ) : null}

        {study.gigaMap ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.gigaMap.label}
              </p>
              {study.gigaMap.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.gigaMap.heading}
                </h2>
              ) : null}
              {study.gigaMap.body ? (
                <p
                  className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                    study.gigaMap.heading ? "mt-5" : ""
                  }`}
                >
                  {study.gigaMap.body}
                </p>
              ) : null}
            </Reveal>

            {study.gigaMap.images?.length ? (
              <div
                className={
                  study.gigaMap.heading || study.gigaMap.body
                    ? "mt-10 space-y-6 sm:mt-12"
                    : "mt-8 space-y-6 sm:mt-10"
                }
              >
                {study.gigaMap.images.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    {image.objectFit === "contain" ? (
                      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1600}
                          height={image.height ?? 900}
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.ideaGeneration ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.ideaGeneration.label}
              </p>
              {study.ideaGeneration.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.ideaGeneration.heading}
                </h2>
              ) : null}
              {study.ideaGeneration.body ? (
                <p
                  className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                    study.ideaGeneration.heading ? "mt-5" : ""
                  }`}
                >
                  {study.ideaGeneration.body}
                </p>
              ) : null}
            </Reveal>

            {study.ideaGeneration.images?.length ? (
              <Reveal
                className={
                  study.ideaGeneration.heading || study.ideaGeneration.body
                    ? "mt-10 sm:mt-12"
                    : "mt-8 sm:mt-10"
                }
              >
                <ImageSlideshow
                  images={study.ideaGeneration.images}
                  objectFit="contain"
                />
              </Reveal>
            ) : null}

            {study.ideaGeneration.closing ? (
              <Reveal className="mt-8 sm:mt-10">
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.ideaGeneration.closing}
                </p>
              </Reveal>
            ) : null}

            {study.ideaGeneration.afterImages?.length ? (
              <div className="mt-8 space-y-6 sm:mt-10">
                {study.ideaGeneration.afterImages.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    {image.objectFit === "contain" ? (
                      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1600}
                          height={image.height ?? 900}
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.lowFidelity ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.lowFidelity.label}
              </p>
              <ol className="space-y-4">
                {study.lowFidelity.items.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base leading-relaxed text-ink-soft sm:text-lg"
                  >
                    <span className="case-accent-num font-serif shrink-0 font-semibold text-ink">
                      {index + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            {study.lowFidelity.systemLoop ? (
              <Reveal className="mt-10 sm:mt-12">
                <SystemLoopDiagram
                  title={study.lowFidelity.systemLoop.title}
                  steps={study.lowFidelity.systemLoop.steps}
                  image={study.lowFidelity.systemLoop.image}
                />
              </Reveal>
            ) : null}

            {study.lowFidelity.images?.length ? (
              <FidelityImageGrid
                images={study.lowFidelity.images}
                layout={study.lowFidelity.imageLayout}
              />
            ) : null}          </section>
        ) : null}

        {study.midFidelity ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.midFidelity.label}
              </p>
              {study.midFidelity.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.midFidelity.heading}
                </h2>
              ) : null}
              {study.midFidelity.body ? (
                <p
                  className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                    study.midFidelity.heading ? "mt-5" : ""
                  }`}
                >
                  {study.midFidelity.body}
                </p>
              ) : null}
            </Reveal>

            {study.midFidelity.featureCards?.length ? (
              <Reveal className="mt-8 sm:mt-10">
                <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  {study.midFidelity.featureCards.map((card) => (
                    <article
                      key={card.body}
                      className="flex min-h-[16rem] flex-col items-center justify-center rounded-[1.75rem] border border-[#7B6CF0]/35 bg-white px-8 py-10 text-center shadow-[0_0_28px_rgba(123,108,240,0.14)] sm:min-h-[18rem] sm:px-10 sm:py-12"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7B6CF0]/12 text-[#7B6CF0]">
                        <FeatureCardIcon name={card.icon} />
                      </span>
                      <p className="mt-6 max-w-[16rem] text-base leading-snug font-medium tracking-[-0.01em] text-ink sm:text-lg">
                        {card.body}
                      </p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {study.midFidelity.items?.length ? (
              <Reveal className="mt-6 sm:mt-8">
                <ul className="space-y-3">
                  {study.midFidelity.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-relaxed text-ink-soft sm:text-lg"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B6CF0]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {study.midFidelity.closing ? (
              <Reveal className="mt-6 space-y-4 sm:mt-8">
                {(Array.isArray(study.midFidelity.closing)
                  ? study.midFidelity.closing
                  : [study.midFidelity.closing]
                ).map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-ink-soft sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ) : null}

            {study.midFidelity.images?.length ? (
              <FidelityImageGrid
                images={study.midFidelity.images}
                layout={study.midFidelity.imageLayout}
              />
            ) : null}
          </section>
        ) : null}

        {study.moodBoard ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.moodBoard.label}
              </p>
              {study.moodBoard.heading ? (
                <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {study.moodBoard.heading}
                </h2>
              ) : null}
              <p
                className={`text-base leading-relaxed text-ink-soft sm:text-lg ${
                  study.moodBoard.heading ? "mt-5" : ""
                }`}
              >
                {study.moodBoard.body}
              </p>
            </Reveal>

            {study.moodBoard.colorPalettes?.length ? (
              <div className="mt-10 space-y-10 sm:mt-12">
                {study.moodBoard.colorPalettes.map((palette) => (
                  <Reveal key={palette.title}>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                      {palette.title}
                    </h3>
                    <div className="mt-6 space-y-8">
                      {(palette.groups ?? [{ label: "", colors: palette.colors ?? [] }]).map(
                        (group) => (
                          <div key={`${palette.title}-${group.label}`}>
                            {group.label ? (
                              <p className="mb-4 text-sm font-medium text-muted">
                                {group.label}
                              </p>
                            ) : null}
                            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:gap-5">
                              {group.colors.map((color) => (
                                <div
                                  key={`${group.label}-${color.hex}-${color.hexEnd ?? ""}`}
                                  className="text-center"
                                >
                                  {color.hexEnd ? (
                                    <div
                                      className="case-card relative flex aspect-square w-full flex-col justify-between overflow-hidden rounded-2xl border border-black/10 p-2 shadow-sm sm:p-3"
                                      style={{
                                        backgroundImage: `linear-gradient(180deg, ${color.hex} 0%, ${color.hexEnd} 100%)`,
                                      }}
                                    >
                                      <p className="font-mono text-[0.65rem] font-medium text-white sm:text-xs">
                                        {color.hex}
                                      </p>
                                      <p className="font-mono text-[0.65rem] font-medium text-white sm:text-xs">
                                        {color.hexEnd}
                                      </p>
                                    </div>
                                  ) : (
                                    <>
                                      <div
                                        className="case-card aspect-square w-full rounded-2xl border border-black/10 shadow-sm"
                                        style={{ backgroundColor: color.hex }}
                                      />
                                      <p className="mt-2 font-mono text-xs text-ink sm:text-sm">
                                        {color.hex}
                                      </p>
                                    </>
                                  )}
                                  {color.label ? (
                                    <p className="mt-1 text-xs text-muted">{color.label}</p>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}

            {study.moodBoard.images?.length ? (
              <div className="mt-10 space-y-6 sm:mt-12">
                {study.moodBoard.images.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={2033}
                        height={1116}
                        unoptimized
                        sizes="(max-width: 1152px) 100vw, 1152px"
                        className="h-auto w-full"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.outcome ? (
        <section className={sectionClass}>
          <Reveal>
            {study.outcome.label ? (
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.outcome.label}
              </p>
            ) : null}
            <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              {study.outcome.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {study.outcome.body}
            </p>
          </Reveal>

          {study.outcome.breathingCards?.length ? (
            <Reveal className="mt-10 sm:mt-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                {study.outcome.breathingCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.5rem] border border-[#7B6CF0]/45 bg-white px-6 py-7 text-center shadow-[0_0_28px_rgba(123,108,240,0.28)] sm:px-8 sm:py-8"
                  >
                    <h3 className="text-sm font-bold tracking-[0.08em] text-ink uppercase sm:text-[0.95rem]">
                      {card.title}
                    </h3>
                    {card.subtitle ? (
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                        {card.subtitle}
                      </p>
                    ) : null}
                    <div
                      className={`mt-6 flex items-start justify-center ${
                        card.steps.length === 2 ? "gap-12 sm:gap-16" : "gap-8 sm:gap-12"
                      }`}
                    >
                      {card.steps.map((step) => (
                        <div key={`${card.title}-${step.label}`} className="min-w-[3.5rem]">
                          <p className="font-serif text-4xl leading-none font-semibold tracking-[-0.03em] text-[#7B6CF0] sm:text-5xl">
                            {step.value}
                          </p>
                          <p className="mt-2 text-sm text-ink sm:text-base">
                            {step.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          ) : null}

          {study.outcome.table ? (
            <Reveal className="mt-10 sm:mt-12">
              <div className="case-card overflow-hidden rounded-2xl border border-line bg-white/70">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[20rem] text-left text-sm sm:text-base">
                    <thead>
                      <tr className="border-b border-line bg-surface/80">
                        {study.outcome.table.headers.map((header) => (
                          <th
                            key={header}
                            className="px-5 py-4 text-xs font-semibold tracking-[0.12em] text-muted uppercase sm:px-6"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {study.outcome.table.rows.map((row, rowIndex) => (
                        <tr
                          key={`${row.join("-")}-${rowIndex}`}
                          className="border-b border-line last:border-b-0"
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${cell}-${cellIndex}`}
                              className="px-5 py-4 text-ink-soft sm:px-6"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          ) : null}

          {study.outcome.feedback ? (
            <Reveal className="mt-10 sm:mt-12">
              {study.outcome.feedback.heading ? (
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.outcome.feedback.heading}
                </p>
              ) : null}
              <ol className={`space-y-4 ${study.outcome.feedback.heading ? "mt-6" : ""}`}>
                {study.outcome.feedback.items.map((item, index) => (
                  <li
                    key={item}
                    className="case-card flex gap-4 rounded-2xl border border-line bg-white/70 p-5 text-sm leading-relaxed text-ink-soft sm:text-base"
                  >
                    <span className="case-accent-num font-serif shrink-0 text-lg font-semibold text-ink">
                      {index + 1}.
                    </span>
                    <span>&ldquo;{item}&rdquo;</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ) : null}

          {study.outcome.metrics?.length ? (
            <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
              {study.outcome.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="case-card rounded-2xl border border-line bg-white/70 px-5 py-6 text-center"
                >
                  <p className="case-accent-num font-serif text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{metric.label}</p>
                </div>
              ))}
            </Reveal>
          ) : null}

          {study.outcome.websitePreview ? (
            <Reveal className="mt-10 sm:mt-12">
              <WebsitePreview preview={study.outcome.websitePreview} />
            </Reveal>
          ) : null}

          {study.outcome.images?.length ? (
            <div
              className={
                study.outcome.images.length === 2
                  ? "mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2"
                  : "mt-10 space-y-6 sm:mt-12"
              }
            >
              {study.outcome.images.map((image, index) => (
                <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                  <div
                    className={`relative overflow-hidden rounded-[1.5rem] border border-line bg-surface ${
                      study.outcome?.images?.length === 2
                        ? "aspect-[4/5]"
                        : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 576px"
                      className="object-cover object-center"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : null}
        </section>

        ) : null}

        {study.physicalMidFidelity ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.physicalMidFidelity.label}
              </p>
              {study.physicalMidFidelity.body ? (
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.physicalMidFidelity.body}
                </p>
              ) : null}
            </Reveal>

            {study.physicalMidFidelity.images.length ? (
              <div
                className={
                  study.physicalMidFidelity.body
                    ? "mt-8 space-y-6 sm:mt-10"
                    : "mt-6 space-y-6 sm:mt-8"
                }
              >
                {study.physicalMidFidelity.images.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    {image.objectFit === "contain" ? (
                      <div className="mx-auto max-w-2xl overflow-hidden rounded-[1.5rem] border border-line bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1600}
                          height={image.height ?? 900}
                          unoptimized
                          sizes="(max-width: 672px) 100vw, 672px"
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1152px) 100vw, 1152px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.product ? (
        <section className={sectionClass}>
          <Reveal>
            {study.product.label ? (
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.product.label}
              </p>
            ) : null}
            <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              {study.product.heading}
            </h2>
            {study.product.body ? (
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.product.body}
              </p>
            ) : null}
          </Reveal>

          <div className="mt-10 space-y-6 sm:mt-12">
            {study.product.images.map((image, index) => (
              <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                {image.objectFit === "contain" && !image.aspectClass ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1209}
                    height={720}
                    unoptimized
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="h-auto w-full"
                  />
                ) : (
                  <div
                    className={`relative overflow-hidden rounded-[1.5rem] border border-line ${image.objectFit === "contain" ? "bg-black" : "bg-surface"} ${image.aspectClass ?? "aspect-[16/10]"}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      className={image.objectFit === "contain" ? "object-contain" : "object-cover"}
                    />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        ) : null}

        {study.model3d ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.model3d.label}
              </p>
              {study.model3d.body ? (
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {study.model3d.body}
                </p>
              ) : null}
            </Reveal>

            {study.model3d.images.length ? (
              <div
                className={`grid gap-4 sm:grid-cols-2 lg:gap-5 ${
                  study.model3d.body ? "mt-8 sm:mt-10" : "mt-6 sm:mt-8"
                }`}
              >
                {study.model3d.images.map((image, index) => (
                  <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
                    {image.objectFit === "contain" ? (
                      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1024}
                          height={image.height ?? 482}
                          unoptimized
                          sizes="(max-width: 640px) 100vw, 576px"
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 100vw, 576px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {study.highFidelity ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.highFidelity.label}
              </p>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.highFidelity.body}
              </p>
            </Reveal>

            {study.highFidelity.slideshows?.length ? (
              <div
                className={`mt-8 sm:mt-10 ${
                  study.highFidelity.slideshowLayout === "stack" ||
                  study.highFidelity.slideshows.length === 1
                    ? "space-y-14 sm:space-y-16"
                    : "grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-8"
                }`}
              >
                {study.highFidelity.slideshows.map((slideshow) => {
                  const sideBySide =
                    study.highFidelity?.slideshowLayout !== "stack" &&
                    (study.highFidelity?.slideshows?.length ?? 0) > 1;

                  return (
                  <Reveal key={slideshow.label} className="flex flex-col items-center">
                    {slideshow.mockup === "laptop" ? (
                      <h3 className="mb-6 font-serif text-xl font-semibold tracking-[-0.02em] text-ink sm:mb-8 sm:text-2xl">
                        {slideshow.label}
                      </h3>
                    ) : null}
                    {slideshow.mockup === "laptop" ? (
                      <LaptopMockupSlideshow
                        slides={slideshow.slides}
                      />
                    ) : slideshow.mockup === "square" ? (
                      <SquareMockupSlideshow
                        label={slideshow.label}
                        slides={slideshow.slides}
                        className={sideBySide ? "max-w-md" : undefined}
                      />
                    ) : (
                      <IphoneMockupSlideshow slides={slideshow.slides} />
                    )}
                  </Reveal>
                  );
                })}
              </div>
            ) : study.highFidelity.slides?.length ? (
              <Reveal className="mt-6 flex justify-center sm:mt-8">
                {study.highFidelity.mockup === "laptop" ? (
                  <LaptopMockupSlideshow slides={study.highFidelity.slides} />
                ) : study.highFidelity.mockup === "square" ? (
                  <SquareMockupSlideshow slides={study.highFidelity.slides} />
                ) : (
                  <IphoneMockupSlideshow slides={study.highFidelity.slides} />
                )}
              </Reveal>
            ) : null}
          </section>
        ) : null}

        {study.researchPaper ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="mb-4 case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.researchPaper.label}
              </p>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.researchPaper.body}
              </p>
              <a
                href={withBasePath(study.researchPaper.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink/90"
              >
                {study.researchPaper.linkLabel ?? "View research paper"}
                <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </section>
        ) : null}

        {study.prototype ? (
          <section className={sectionClass}>
            <Reveal>
              <p className="case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {study.prototype.label}
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={
                    study.prototype.poster
                      ? withBasePath(study.prototype.poster)
                      : undefined
                  }
                >
                  <source src={withBasePath(study.prototype.video)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Reveal>
          </section>
        ) : null}

        {study.detailGroups?.map((group) => (
          <Fragment key={group.label}>
            <section className={sectionClass}>
            <Reveal>
              <p className="case-section-label text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {group.label}
              </p>
              {group.intro ? (
                <p className="font-serif mt-5 text-xl leading-snug tracking-[-0.02em] text-ink sm:text-2xl">
                  {group.intro}
                </p>
              ) : null}
            </Reveal>

            {group.metrics?.length ? (
              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
                {group.metrics.map((metric, index) => (
                  <Reveal key={`${group.label}-${metric.value}`} delay={index * 0.05}>
                    <div className="case-card flex h-full flex-col rounded-2xl border border-line bg-white px-6 py-8 text-center sm:px-7 sm:py-10">
                      <p className="case-accent-num font-serif text-5xl font-semibold tracking-[-0.04em] text-accent sm:text-6xl">
                        {metric.value}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                        {metric.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : group.items?.length ? (
            <div className="mt-8 divide-y divide-line border-y border-line">
              {group.items.map((item, index) => (
                <Reveal key={`${group.label}-${item.heading}`} delay={index * 0.04}>
                  <div className="grid gap-5 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:py-10">
                    <p className="case-accent-num text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                      {item.label ?? `${String(index + 1).padStart(2, "0")}`}
                    </p>
                    <div>
                      <h2 className="font-serif text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                        {item.heading}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                        {item.body}
                      </p>
                      {item.note ? (
                        <p className="mt-4 border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-muted">
                          {item.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            ) : null}
            </section>
          </Fragment>
        ))}

        {study.role ? (
          <section className={sectionClass}>
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {study.role.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                {study.role.body}
              </p>
              <ul className="mt-6 space-y-3">
                {study.role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ) : null}

        <section className={sectionClass}>
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              {previous ? (
                <Link
                  href={`/work/${previous.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-accent sm:text-base"
                >
                  <span aria-hidden>←</span>
                  <span>Previous Project</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-accent sm:text-base"
                >
                  <span>Next Project</span>
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
            </div>
          </Reveal>
        </section>

      </article>

      <Footer />
    </div>
  );
}

function FeatureCardIcon({ name }: { name: "audio" | "tactile" }) {
  const className = "h-8 w-8";

  if (name === "audio") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
        <path
          d="M6.5 12.5h4.2L16.5 8v16l-5.8-4.5H6.5c-.8 0-1.5-.7-1.5-1.5v-4.5c0-.8.7-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 12.2c1.4 1.1 2.2 2.7 2.2 4.3s-.8 3.2-2.2 4.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M23.2 9.2c2.3 1.8 3.7 4.4 3.7 7.3s-1.4 5.5-3.7 7.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M11.5 14.5V9.8c0-1.5 1.2-2.8 2.8-2.8s2.8 1.3 2.8 2.8v8.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.1 15.2V12c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21.5 17.5v-1.8c0-1.1.9-2 2-2s2 .9 2 2v3.8c0 4.1-3.3 7.5-7.4 7.5h-.4c-3.3 0-6.2-2.1-7.2-5.2L9.2 16.5c-.4-1.1.2-2.3 1.3-2.7.9-.3 1.9.1 2.4.9l1.1 1.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonaCardIcon({
  name,
}: {
  name: "users" | "spark" | "grid" | "hourglass";
}) {
  const className =
    "h-7 w-7 text-[color:var(--case-heading,#3B6FE8)]";

  if (name === "users") {
    return (
      <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
        <path
          d="M14 4.5c-3.6 0-6.5 2.7-6.5 6 0 2.2 1.2 4.1 3.1 5.2v.7c-4.8.7-8.1 3.5-8.1 6.9h23c0-3.4-3.3-6.2-8.1-6.9v-.7c1.9-1.1 3.1-3 3.1-5.2 0-3.3-2.9-6-6.5-6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
        <circle cx="14" cy="14" r="3.2" fill="currentColor" />
        <path
          d="M14 3.5v3.2M14 21.3v3.2M3.5 14h3.2M21.3 14h3.2M6.6 6.6l2.3 2.3M19.1 19.1l2.3 2.3M6.6 21.4l2.3-2.3M19.1 8.9l2.3-2.3"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "grid") {
    return (
      <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
        <rect x="4.5" y="5.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
        <rect x="11.25" y="5.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
        <rect x="18" y="5.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
        <rect x="4.5" y="17" width="5.5" height="5.5" rx="1" fill="currentColor" />
        <rect x="11.25" y="17" width="5.5" height="5.5" rx="1" fill="currentColor" />
        <rect x="18" y="17" width="5.5" height="5.5" rx="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
      <path d="M8 4.5h12l-6 8.5L8 4.5Z" fill="currentColor" />
      <path d="M8 23.5h12l-6-8.5-6 8.5Z" fill="currentColor" />
    </svg>
  );
}
