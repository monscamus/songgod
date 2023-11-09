import { useState } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/" className="text-gray-800">
      <span className="font-mono text-2xl sm:text-5xl md:text-7xl">
        Alex Cochran
      </span>
    </Link>
  );
}
