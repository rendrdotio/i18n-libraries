import Header from "@/app/[locale]/components/header";
import Footer from "@/app/[locale]/components/footer";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function MainLayout({ children, locale }: Props) {
  return (
    <div className="flex flex-col h-full bg-slate-800 items-center">
      <Header locale={locale} />
      <div className="main flex-grow flex justify-center">{children}</div>
      <Footer locale={locale} />
    </div>
  );
}
