"use client";

import Link from "next/link";
import { DomainConfig } from "@/utils/fetchDomainConfig";

export default function Navbar({ domainConfig }: { domainConfig: DomainConfig }) {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo & Name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">{domainConfig?.logo}</span>
          <span className="text-xl font-semibold text-gray-800">{domainConfig?.headerText}</span>
        </Link>
      </div>
    </nav>
  );
}
