import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[100svh] max-w-site flex-col items-start justify-center px-7 sm:px-10 md:px-16 xl:px-24">
      <p className="label-mono !text-brass">404 — Signal lost</p>
      <h1 className="display mt-6 text-[clamp(2.5rem,7vw,6rem)]">
        This route doesn’t <span className="accent-serif">resolve.</span>
      </h1>
      <Link
        href="/"
        className="link-quiet label-mono mt-10 !text-bone"
      >
        Return home
      </Link>
    </div>
  );
}
