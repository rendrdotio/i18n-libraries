import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "nl"] as const;

export const defaultLocale = "en";

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    nl: "/pfadnamen",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
