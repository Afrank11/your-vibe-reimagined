import { existsSync } from "fs";
import { join } from "path";

/** Server-only (build-time under SSG): does this path exist in public/? */
export function publicFileExists(path?: string): boolean {
  if (!path) return false;
  return existsSync(join(process.cwd(), "public", path));
}

/**
 * Server-only (build-time under SSG): returns the public image path only if
 * the file actually exists, so cards fall back gracefully until screenshots
 * are dropped into public/projects/.
 */
export function resolvePublicImage(imagePath?: string): string | undefined {
  return publicFileExists(imagePath) ? imagePath : undefined;
}
