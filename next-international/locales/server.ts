import { createI18nServer } from "next-international/server";

type DictVariable = {
  [key: string]: DictVariable;
};

export type { DictVariable };

import engDict from "./en";

const locales = {
  en: () => import("./en"),
  nl: () => import("./nl"),
};

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer<typeof locales, { en: any; nl: any }>(locales);
