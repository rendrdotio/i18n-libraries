import { useTranslation } from "@/app/i18n";

export default async function Button({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);
  return (
    <button className="block mt-5 font-semibold text-slate-200 hover:text-white">
      {t("products.cart")}
    </button>
  );
}
