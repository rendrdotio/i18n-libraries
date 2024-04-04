import Product from "@/app/[lang]/components/product";
import { useTranslation } from "../i18n";

type Props = {
  params: { lang: string };
};

export default async function Home({ params }: Props) {
  const { lang } = params;

  const { t } = await useTranslation(lang);

  return (
    <div>
      <h1 className="text-white mt-5 text-xl font-medium tracking-tight mb-5">
        {t("products.catalog")}
      </h1>
      <div className="flex h-fit gap-6">
        <Product id={"productOne"} lang={lang} />
        <Product id={"productTwo"} lang={lang} />
      </div>
    </div>
  );
}
