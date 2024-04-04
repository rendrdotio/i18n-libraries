import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function Button({ locale }: { locale: string }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return (
    <button className="block mt-5 font-semibold text-slate-200 hover:text-white">
      {t("products.cart")}
    </button>
  );
}
