/**
 * Build an internal URL that respects the configured base path.
 *
 * The site is served from a sub-path on GitHub Pages (/acelabs/), so a plain
 * "/about/" link would point at the wrong place. Always run internal links
 * through this helper instead of hard-coding the base.
 *
 *   url()            -> /acelabs/
 *   url("about/")    -> /acelabs/about/
 *   url("/about/")   -> /acelabs/about/
 */
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "");
  return `${base}/${clean}`;
}
