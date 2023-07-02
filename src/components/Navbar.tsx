import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex gap-5 px-10 py-3.5">
      <span className="text-xl font-semibold">Shatabrick</span>
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/ladder">Ladder</Link>
        <Link href="/forum">Forum</Link>
      </div>
      <input className="border-2 border-b-neutral-800" />
    </nav>
  );
};
