import { ReactNode } from "react";

type FormationCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FormationCard({ title, description, icon }: FormationCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-[#e0d5c5] bg-[#F5F0E8] px-6 py-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2c3e2d] text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-gray-900 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
