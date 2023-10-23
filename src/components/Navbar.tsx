import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 flex items-center h-14 px-10 py-3">
      <Link href="/">
        <h1 className="font-bold text-xl">WordWise</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
