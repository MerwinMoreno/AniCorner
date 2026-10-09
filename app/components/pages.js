import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { byType, find, unitLabel } from "../../data/titles";

// Title (detail) page factories -------------------------------------------

export function titleParams(type) {
  return () => byType(type).map((t) => ({ slug: t.slug }));
}

export function titleMetadata(type) {
  return async ({ params }) => {
    const { slug } = await params;
    return { title: find(type, slug)?.title ?? "Not found" };
  };
}

export function titlePage(type) {
  return async function TitlePage({ params }) {
    const { slug } = await params;
    const item = find(type, slug);
    if (!item) notFound();
    const label = unitLabel[type];

    return (
      <article className="detail">
        <div className="detail-cover">
          <Image src={item.cover} alt={`${item.title} cover`} fill sizes="250px" priority />
        </div>
        <div className="detail-body">
          <h1>{item.title}</h1>
          <hr />
          {item.synopsis.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <section className="units">
          <h2>List of {label}s</h2>
          <hr />
          <div className="unit-grid">
            {Array.from({ length: item.units }, (_, i) => i + 1).map((n) => (
              <Link key={n} href={`/${type}/${slug}/${n}/`} className="btn btn-primary btn-block">
                {label} {n}
              </Link>
            ))}
          </div>
        </section>
      </article>
    );
  };
}

// Episode / chapter page factories ----------------------------------------

export function unitParams(type) {
  return () =>
    byType(type).flatMap((t) =>
      Array.from({ length: t.units }, (_, i) => ({ slug: t.slug, number: String(i + 1) }))
    );
}

export function unitMetadata(type) {
  return async ({ params }) => {
    const { slug, number } = await params;
    const item = find(type, slug);
    return { title: item ? `${item.title} - ${unitLabel[type]} ${number}` : "Not found" };
  };
}

export function unitPage(type) {
  return async function UnitPage({ params }) {
    const { slug, number } = await params;
    const item = find(type, slug);
    const n = Number(number);
    if (!item || !Number.isInteger(n) || n < 1 || n > item.units) notFound();
    const label = unitLabel[type];

    return (
      <section className="unit-page">
        <p className="crumb">
          <Link href={`/${type}/${slug}/`}>&larr; {item.title}</Link>
        </p>
        <h1>
          {label} {n}
        </h1>
        <div className="unit-placeholder">
          {type === "anime" ? "Video player" : "Manga pages"} coming soon.
        </div>
        <div className="unit-nav">
          {n > 1 ? (
            <Link href={`/${type}/${slug}/${n - 1}/`} className="btn btn-outline">
              &larr; Previous
            </Link>
          ) : (
            <span />
          )}
          {n < item.units && (
            <Link href={`/${type}/${slug}/${n + 1}/`} className="btn btn-outline">
              Next &rarr;
            </Link>
          )}
        </div>
      </section>
    );
  };
}
