import Link from "next/link";

export function FormationsCard() {
  return (
    <Link
      href="/formations"
      className="group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl bg-white text-black border-gray-200 border-4"
    >
      <div className="flex h-full w-full flex-col gap-4">
        <h3 className="text-2xl font-bold">Formations</h3>
        <p className="text-sm text-muted-foreground">
          Des formations professionnelles sur mesure pour accompagner et
          protéger les personnes vulnérables.
        </p>
      </div>
    </Link>
  );
}
