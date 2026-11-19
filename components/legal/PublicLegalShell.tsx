import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { LegalPathProvider } from "@/components/legal/legal-path-context";
import { PublicLegalTabs } from "@/components/legal/PublicLegalTabs";
import { LegalContentTransition } from "@/components/legal/LegalContentTransition";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";

export function PublicLegalShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-white text-slate-900 antialiased">
    <div className={`${SITE_FRAME_CLASS} border-x border-slate-200/70`}>
      <div className="px-5 py-5 sm:px-8 lg:px-10"><SiteHeader showAccountActions={false} surface="light" /></div>
      <div className="grid border-t border-slate-200/70 lg:grid-cols-[210px_minmax(0,1fr)]">
        <aside className="border-b border-slate-200/70 px-5 py-5 sm:px-8 lg:sticky lg:top-0 lg:self-start lg:border-b-0 lg:px-7 lg:py-12">
          <p className="mb-4 text-xs font-medium text-slate-400">Legal &amp; privacy</p>
          <PublicLegalTabs />
        </aside>
        <LegalPathProvider>
          <main className="min-w-0 px-5 py-8 sm:px-10 sm:py-12 lg:border-l lg:border-slate-200/70 lg:px-14">
            <div className="max-w-3xl"><LegalContentTransition>{children}</LegalContentTransition></div>
          </main>
        </LegalPathProvider>
      </div>
    </div>
    <Footer legalPage />
  </div>;
}
