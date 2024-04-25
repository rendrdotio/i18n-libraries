import { getDictionary } from "../dictionaries";

type Props = {
  params: { lang: string };
};

export default async function Home({ params }: Props) {
  const { lang } = params;

  const dict = await getDictionary(lang);

  return (
    <div>
      <h1 className="text-white mt-5 text-xl font-medium tracking-tight mb-5">
        {dict.secondPage.title}
      </h1>
    </div>
  );
}
