import Image from "next/image";
import Button from "@/app/[locale]/components/button";
import write from "public/write.svg";
import { getI18n } from "@/locales/server";

type ProductIds = "productOne" | "productTwo"; // in a real app we should map the product ids. If we have an id that not have
// the corresponding translation key we will have a type error

type Props = {
  id: ProductIds;
};

export default async function Product({ id }: Props) {
  const t = await getI18n();

  return (
    <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl bg-slate-700 max-w-96">
      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <Image alt={"sdf"} className="-scale-y-100" src={write} />
      </span>
      <h3 className="text-white mt-5 text-base font-medium tracking-tight">
        {t("title", { count: 1 })}
      </h3>
      <p className="text-slate-400 mt-2 text-sm">{t("completed")}</p>
      <Button />
    </div>
  );
}
