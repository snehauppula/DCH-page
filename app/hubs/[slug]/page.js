import { notFound } from "next/navigation";
import HubDetail from "@/components/HubDetail";
import { hubs } from "@/lib/data";

export function generateStaticParams() { return hubs.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = hubs.find((x) => x.slug === slug);
  return { title: p ? `${p.name} Hub – Digital Creators Hub` : "Not found" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = hubs.find((x) => x.slug === slug);
  if (!p) notFound();
  return <HubDetail p={p} />;
}
