import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/i18n";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
