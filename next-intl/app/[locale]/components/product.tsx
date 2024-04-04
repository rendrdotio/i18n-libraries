import Image from "next/image";
import Button from "@/app/[locale]/components/button";
import write from "public/write.svg";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  id: string;
  locale: string;
};

export default async function Product({ id, locale }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale });
  return (
    <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl bg-slate-700 max-w-96">
      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <Image
          alt={t(`products.${id}.altText`)}
          className="-scale-y-100"
          src={write}
        />
      </span>
      <h3 className="text-white mt-5 text-base font-medium tracking-tight">
        {t(`products.${id}.title`)}
      </h3>
      <p className="text-slate-400 mt-2 text-sm">
        {t(`products.${id}.description`)}
      </p>
      <Button key={"products.cart"} locale={locale} />
    </div>
  );
}
