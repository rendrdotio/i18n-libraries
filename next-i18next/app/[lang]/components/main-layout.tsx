import Header from "@/app/[lang]/components/header";
import Footer from "@/app/[lang]/components/footer";

type Props = {
  children: React.ReactNode;
  lang: string;
};

export default async function MainLayout({ children, lang }: Props) {
  return (
    <div className="flex flex-col h-full bg-slate-800 items-center">
      <Header lang={lang} />
      <div className="main flex-grow flex justify-center">{children}</div>
      <Footer lang={lang} />
    </div>
  );
}
