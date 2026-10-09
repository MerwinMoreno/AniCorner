import Link from "next/link";
import TitleCard from "./TitleCard";

export default function Section({ heading, href, items }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{heading}</h2>
        {href && (
          <Link href={href} className="more">
            View all
          </Link>
        )}
      </div>
      <div className="grid">
        {items.map((item) => (
          <TitleCard key={`${item.type}-${item.slug}`} item={item} />
        ))}
      </div>
    </section>
  );
}
