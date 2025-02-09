import { BMPreview } from "@/components/partners/bm-preview";
import { SPCarousel } from "@/components/partners/sp-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function metadata() {
  return {
    title: "Partenaires | Anne Géron",
    description: "Nos partenaires et collaborations",
  };
}

export default function PartenairesPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-12 text-center underline">
        Mes Partenaires
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Blaise et Marie Card */}
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-3xl text-center mt-4">
              Blaise et Marie
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <BMPreview />
          </CardContent>
        </Card>

        {/* Santé Partners Card */}
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-3xl text-center mt-4">
              Santé Partners
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <SPCarousel />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
