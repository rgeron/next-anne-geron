export function FlipCard(props: {
  frontTitle: string;
  backContent: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`group h-full perspective-1000 ${props.className}`}>
      <div className="relative h-full w-full duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-8 text-center text-2xl font-bold text-white shadow-xl">
            {props.frontTitle}
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-violet-600 to-indigo-800 p-8 text-white shadow-xl [transform:rotateY(180deg)] backface-hidden">
          <div className="flex h-full items-center justify-center text-center [transform:rotateY(180deg)]">
            {props.backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
