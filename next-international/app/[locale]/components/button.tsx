import { getI18n } from "@/locales/server";

export default async function Button() {
  const t = await getI18n();

  return (
    <button className="block mt-5 font-semibold text-slate-200 hover:text-white">
      {t("products.cart")}
    </button>
  );
}
