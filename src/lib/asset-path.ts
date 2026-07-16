const DEFAULT_BASE_PATH = "/carsonrivera";

export function withBasePath(path?: string): string {
  if (!path) return "";

  if (
    /^(https?:)?\/\//i.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? DEFAULT_BASE_PATH : "");

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!basePath) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
