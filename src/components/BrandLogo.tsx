import { site } from "@/content/site";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/** Theme-colored mark — control fill with text-* utilities (uses currentColor). */
export function BrandLogo({ className = "", title = site.fullName }: BrandLogoProps) {
  return (
    <span
      role="img"
      aria-label={title}
      title={title}
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        WebkitMaskImage: "url(/brand/logo-mask.png)",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: "url(/brand/logo-mask.png)",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
