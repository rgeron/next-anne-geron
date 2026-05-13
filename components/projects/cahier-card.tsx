import { ExternalLink } from "lucide-react";

type CahierCardProps = {
  title: string | React.ReactNode;
  description: string;
  pdfUrl?: string;
  pdfs?: { label: string; url: string }[];
};

export function CahierCard({
  title,
  description,
  pdfUrl,
  pdfs,
}: CahierCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-1.5 bg-gradient-to-r from-stone-400 via-stone-500 to-stone-600" />
      <div className="flex flex-col flex-1 p-8 gap-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-2">
            Cahier
          </p>
          <h3 className="font-roboto font-bold text-xl leading-snug text-stone-800">
            {title}
          </h3>
        </div>
        <p className="text-sm text-stone-500 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 pt-4 border-t border-stone-100">
          {pdfs ? (
            pdfs.map((pdf, pdfIndex) => (
              <a
                key={pdfIndex}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-stone-700 hover:bg-stone-900 px-5 py-2.5 rounded-xl transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                {pdf.label}
              </a>
            ))
          ) : (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-stone-700 hover:bg-stone-900 px-5 py-2.5 rounded-xl transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Voir un extrait du PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
