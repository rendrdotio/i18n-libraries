import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function Footer({ locale }: { locale: string }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale });
  const date = new Date();

  return (
    <div className="footer text-center py-2 text-sm mb-6">
      <p>&copy; Logo Company {date.getFullYear()}</p>
      <p>{t("footer.allRights")}</p>
    </div>
  );
}
