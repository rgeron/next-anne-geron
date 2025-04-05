import Image from "next/image";
import Link from "next/link";

export function FormationsCard() {
  return (
    <Link
      href="/formations"
      className="group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl bg-[#F5F0E8] text-gray-800 border-2 border-amber-200 border-opacity-20"
    >
      <div className="flex h-full w-full flex-col gap-4">
        <h3 className="text-3xl font-bold">Formations</h3>
        <p className="text-lg text-gray-700">
          Des formations professionnelles sur mesure.
        </p>
        <div className="relative h-60 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/formation.jpg"
            alt="Formations illustration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}
