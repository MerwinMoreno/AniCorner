import Section from "../components/Section";
import { byType } from "../../data/titles";

export const metadata = { title: "Anime" };

export default function AnimePage() {
  return <Section heading="Anime" items={byType("anime")} />;
}
