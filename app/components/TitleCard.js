import Image from "next/image";
import Link from "next/link";
import { actionLabel } from "../../data/titles";

export default function TitleCard({ item }) {
  const href = `/${item.type}/${item.slug}/`;
  return (
    <article className="card">
      <Link href={href} className="card-link">
        <div className="card-cover">
          <Image
            src={item.cover}
            alt={`${item.title} cover`}
            fill
            sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"
          />
        </div>
        <h3 className="card-title">{item.title}</h3>
      </Link>
      <Link href={href} className="btn btn-accent btn-block">
        {actionLabel[item.type]} this {item.type === "anime" ? "Anime" : "Manga"}
      </Link>
    </article>
  );
}
