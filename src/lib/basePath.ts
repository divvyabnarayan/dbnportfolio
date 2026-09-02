const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(href: string) {
  if (
    !href ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const prefixed =
    !basePath || href === basePath || href.startsWith(`${basePath}/`)
      ? href
      : `${basePath}${href.startsWith("/") ? href : `/${href}`}`;

  if (!basePath) {
    return prefixed;
  }

  const [path, hash] = prefixed.split("#", 2);
  const isFile = /\.[a-zA-Z0-9]+$/.test(path);
  const withSlash = !isFile && !path.endsWith("/") ? `${path}/` : path;

  return hash ? `${withSlash}#${hash}` : withSlash;
}
