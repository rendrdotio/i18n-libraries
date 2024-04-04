import LocaleSwitcher from "./LocaleSwitcher";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function Header({ locale }: { locale: string }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return (
    <div className="header flex justify-between items-center py-4 max-w-[792px] w-full">
      <div className="flex-1 text-white text-base font-bold">{t("title")}</div>
      <div className="flex items-end">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
