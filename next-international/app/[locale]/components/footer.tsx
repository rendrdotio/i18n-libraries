import { getScopedI18n } from "@/locales/server";

export default async function Footer() {
  const scopedT = await getScopedI18n("footer");
  const date = new Date();

  return (
    <div className="footer text-center py-2 text-sm mb-6 text-white">
      <p>&copy; Logo Company {date.getFullYear()}</p>
      <p>{scopedT("allRights")}</p>
    </div>
  );
}
