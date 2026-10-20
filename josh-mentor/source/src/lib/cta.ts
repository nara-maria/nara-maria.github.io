import { site } from "@/config/site";

export const ctaHref = (): string =>
  site.links.bookingUrl || site.links.instagramDmUrl || site.links.instagramUrl;

export const ctaMode = (): "booking" | "instagram" =>
  site.links.bookingUrl ? "booking" : "instagram";
