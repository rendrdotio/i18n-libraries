"use client";

import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";

import { locales } from "@/constants/locales";

export default function Header() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const t = useI18n();

  return (
    <div className="header flex justify-between items-center py-4 max-w-[792px] w-full">
      <div className="flex-1 text-white text-base font-bold">{t("title")}</div>

      <Select
        onValueChange={(selectedLocale) => {
          changeLocale(selectedLocale as any);
        }}
        value={locale}
      >
        <SelectTrigger
          className="w-[80px] bg-slate-700 text-white border-none"
          value={locale}
        >
          <SelectValue placeholder={locale} />
        </SelectTrigger>
        <SelectContent className="w-[80px] min-w-0 bg-slate-700 text-white">
          {locales.map((locale, i) => {
            return (
              <SelectItem key={i} value={locale}>
                {locale.toUpperCase()}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
