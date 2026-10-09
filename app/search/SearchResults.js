"use client";

import { useSearchParams } from "next/navigation";
import Section from "../components/Section";
import { titles } from "../../data/titles";

export default function SearchResults() {
  const q = (useSearchParams().get("q") ?? "").trim();
  const results = q
    ? titles.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()))
    : titles;

  return results.length ? (
    <Section heading={q ? `Results for "${q}"` : "All titles"} items={results} />
  ) : (
    <section className="section">
      <h2>No results for &quot;{q}&quot;</h2>
    </section>
  );
}
