import Section from "./components/Section";
import { byType } from "../data/titles";

export default function Home() {
  return (
    <>
      <Section heading="Anime" href="/anime/" items={byType("anime")} />
      <Section heading="Manga" href="/manga/" items={byType("manga")} />
    </>
  );
}
