import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/site/*",
  { eager: true },
);

const byPublicPath = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([key, mod]) => [
    key.replace("/src/assets/images/site/", "/images/site/"),
    mod.default,
  ]),
);

export function siteImage(path: string): ImageMetadata {
  const img = byPublicPath.get(path);
  if (!img) {
    throw new Error(
      `siteImage: no asset matches "${path}". Make sure the file exists in src/assets/images/site/.`,
    );
  }
  return img;
}
