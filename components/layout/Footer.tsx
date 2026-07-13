"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/data";

/** Slim closing bar with live Yaoundé time — a quiet "he's a real person, there" detail. */
export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Douala",
        }).format(new Date()),
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="rule">
      <div className="mx-auto flex max-w-site flex-col gap-3 px-7 sm:px-10 py-8 md:flex-row md:items-center md:justify-between md:px-16 xl:px-24">
        <p className="label-mono">© {new Date().getFullYear()} Frank Ateh — Yaoundé, Cameroon</p>
        <p className="label-mono">
          {contact.coordinates}
          {time && <span> · Local time {time}</span>}
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-quiet label-mono self-start !text-bone/70 transition-colors hover:!text-bone md:self-auto"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
