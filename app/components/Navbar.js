"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Brand from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/anime/", label: "Anime" },
  { href: "/manga/", label: "Manga" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const onSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    setOpen(false);
    router.push(q ? `/search/?q=${encodeURIComponent(q)}` : "/search/");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Brand />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-menu${open ? " open" : ""}`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={isActive(l.href) ? "active" : ""}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <form className="search" role="search" onSubmit={onSearch}>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-outline">
              Search
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
