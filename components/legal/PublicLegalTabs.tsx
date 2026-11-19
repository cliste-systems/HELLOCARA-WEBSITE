"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PUBLIC_LEGAL_PAGES } from "@/lib/legal-pages";
import { cn } from "@/lib/utils";

export function PublicLegalTabs() {
  const pathname = usePathname();
  return <nav aria-label="Legal documents" className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:items-start lg:gap-5">
    {PUBLIC_LEGAL_PAGES.map(page => <Link key={page.href} href={page.href} aria-current={pathname === page.href ? "page" : undefined} className={cn("text-sm leading-6 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500", pathname === page.href ? "font-semibold text-slate-950 underline decoration-slate-300 underline-offset-8" : "text-slate-500")}>{page.label}</Link>)}
  </nav>;
}
