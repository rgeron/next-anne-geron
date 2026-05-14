import { Metadata } from "next";

import { ClientMandatairePage } from "./client-page";

export const metadata: Metadata = {
  title: "Mandataire Judiciaire | Anne Géron",
  description: "Mandataire Judiciaire à la Protection des Majeurs",
};

export default function MandatairePage() {
  return <ClientMandatairePage />;
}
