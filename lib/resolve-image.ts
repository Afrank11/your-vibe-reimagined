import { existsSync } from "fs";
import { join } from "path";

/**
 * Server-only (build-time under SSG): returns the public image path only if
 * the file actually exists, so cards fall back gracefully until screenshots
 * are dropped into public/projects/.
 */
export function resolvePublicImage(imagePath?: string): string | undefined {
  if (!imagePath) return undefined;
  return existsSync(join(process.cwd(), "public", imagePath)) ? imagePath : undefined;
}
