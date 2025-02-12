import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="w-[350px] flex flex-col">
      <CardHeader>
        <CardTitle className="whitespace-pre-wrap">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        {description && (
          <CardDescription className="mb-4 whitespace-normal flex-1">
            {description}
          </CardDescription>
        )}
        <div className="flex gap-2 mt-auto">
          {pdfs ? (
            pdfs.map((pdf, pdfIndex) => (
              <Button key={pdfIndex} asChild>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {pdf.label}
                </a>
              </Button>
            ))
          ) : (
            <Button asChild>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                Voir un extrait du PDF
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
