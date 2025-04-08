import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandataire Judiciaire | Anne Géron",
  description: "Mandataire Judiciaire à la Protection des Majeurs",
};

import ClientMandatairePage from "./client-page";

export default function MandatairePage() {
  return <ClientMandatairePage />;
}
