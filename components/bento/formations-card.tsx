import Link from "next/link";

export function FormationsCard() {
  return (
    <Link
      href="/formations"
      className="group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl bg-[#E8DCD0] text-gray-800 border-2 border-amber-200 border-opacity-20"
    >
      <div className="flex h-full w-full flex-col gap-4">
        <h3 className="text-2xl font-bold">Formations</h3>
        <p className="text-sm text-gray-700">
          Des formations professionnelles sur mesure pour accompagner et
          protéger les personnes vulnérables.
        </p>
      </div>
    </Link>
  );
}
