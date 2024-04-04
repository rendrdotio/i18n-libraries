import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/app/[lang]/components/main-layout";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<Props>) {
  return (
    <html className="h-full" lang={lang} dir={dir(lang)}>
      <body className={`${inter.className} h-full`}>
        <MainLayout lang={lang}>{children}</MainLayout>
      </body>
    </html>
  );
}
