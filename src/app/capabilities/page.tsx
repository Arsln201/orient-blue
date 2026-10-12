import type { Metadata } from "next";
import CapabilitiesPage from "@/components/CapabilitiesPage";

export const metadata: Metadata = {
  title: "Technical Capabilities | Orient Blue FZ-L.L.C.",
  description:
    "Explore the technical capabilities, engineering expertise, quality approach and technical process framework of Orient Blue FZ-L.L.C.",
};

export default function CapabilitiesRoute() {
  return <CapabilitiesPage />;
}
