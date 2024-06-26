import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/app/[locale]/components/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "nl" }];
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <html className="h-full" lang={locale}>
      <body className={`${inter.className} h-full`}>
        <MainLayout locale={locale}>{children}</MainLayout>
      </body>
    </html>
  );
}
