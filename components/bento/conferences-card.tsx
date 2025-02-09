import Link from "next/link";

export function ConferencesCard() {
  return (
    <Link
      href="/conferences"
      className="group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl bg-[#F5F0E8] text-gray-800 border-2 border-gray-200 border-opacity-20"
    >
      <div className="flex h-full w-full flex-col gap-4">
        <h3 className="text-2xl font-bold">Conférences & Ateliers</h3>
        <p className="text-sm text-gray-700">
          Je crée et j&apos;anime des conférences sur mesure, conçues pour
          sensibiliser les participants à des thématiques clés et engager des
          discussions enrichissantes. Ces conférences peuvent s&apos;accompagner
          d&apos;ateliers pratiques.
        </p>
      </div>
    </Link>
  );
}
