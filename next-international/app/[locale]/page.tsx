import { getScopedI18n } from "@/locales/server";
import Product from "@/app/[locale]/components/product";

export default async function Home() {
  const scopedT = await getScopedI18n("products");

  return (
    <div>
      <h1 className="text-white mt-5 text-xl font-medium tracking-tight mb-5">
        {scopedT("catalog")}
      </h1>
      <div className="flex h-fit gap-6">
        <Product id={"productOne"} />
        <Product id={"productTwo"} />
      </div>
    </div>
  );
}
