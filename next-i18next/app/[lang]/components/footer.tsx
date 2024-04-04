import { useTranslation } from "@/app/i18n";

export default async function Footer({ lang }: { lang: string }) {
  const date = new Date();
  const { t } = await useTranslation(lang);
  return (
    <div className="footer text-center py-2 text-sm mb-6">
      <p>&copy; Logo Company {date.getFullYear()}</p>
      <p>{t("footer.allRights")}</p>
    </div>
  );
}
