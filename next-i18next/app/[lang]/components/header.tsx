import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";

export default async function Header({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <div className="header flex justify-between items-center py-4 max-w-[792px] w-full">
      <div className="flex-1 text-white text-base font-bold">{t("title")}</div>
      <div className="flex items-end">
        <Trans i18nKey="languageSwitcher" t={t}>
          Switch from <strong className="px-2">{{ lang } as any}</strong> to:{" "}
        </Trans>
        {languages
          .filter((l) => lang !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && " or "}
                <Link href={`/${l}`}>{l}</Link>
              </span>
            );
          })}
      </div>
    </div>
  );
}
