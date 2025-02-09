import Link from "next/link";

function BentoCard(props: {
  title: string;
  href: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const baseStyles =
    "group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl";
  const variantStyles =
    props.variant === "dark"
      ? "bg-black text-white border-gray-800"
      : "bg-white text-black border-gray-200 border-4";

  return (
    <Link
      href={props.href}
      className={`${baseStyles} ${variantStyles} border ${props.className}`}
    >
      <div className="flex h-full w-full items-center justify-center text-center text-2xl font-bold">
        {props.title}
      </div>
    </Link>
  );
}

export function BentoSection() {
  return (
    <section className="container mx-auto p-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px]">
        {/* Formations - Left side */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2">
          <BentoCard title="Formations" href="/formations" variant="light" />
        </div>

        {/* MJPM - Top middle */}
        <div className="md:col-span-6 lg:col-span-4">
          <BentoCard
            title="Mandataire Judiciaire à la Protection des Majeurs"
            href="/mandataire"
            variant="dark"
          />
        </div>

        {/* Conferences - Right side */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2">
          <BentoCard
            title="Conférences & Ateliers"
            href="/conferences"
            variant="light"
          />
        </div>

        {/* Partners */}
        <div className="md:col-span-6 lg:col-span-4">
          <BentoCard
            title="Mes Partenaires"
            href="/partenaires"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
