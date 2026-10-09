import Link from "next/link";

export default function NotFound() {
  return (
    <section className="unit-page">
      <h1>Page not found</h1>
      <p>We couldn&apos;t find what you were looking for.</p>
      <Link href="/" className="btn btn-accent">
        Back home
      </Link>
    </section>
  );
}
