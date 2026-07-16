export function withBasePath(path?: string): string {
  if (!path) return "";

  if (
    /^(https?:)?\/\//i.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }

  // Only use NEXT_PUBLIC_BASE_PATH when explicitly set. This lets custom
  // domains (root) work without forcing a repo subpath in production.
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (basePath.endsWith("/")) basePath = basePath.slice(0, -1);

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return basePath ? `${basePath}${normalizedPath}` : normalizedPath;
}
