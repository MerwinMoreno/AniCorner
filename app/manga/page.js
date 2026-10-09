import Section from "../components/Section";
import { byType } from "../../data/titles";

export const metadata = { title: "Manga" };

export default function MangaPage() {
  return <Section heading="Manga" items={byType("manga")} />;
}
