"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  HERO_NICHE_CARD_CLASS,
  HERO_NICHE_CARD_INNER_CLASS,
  HERO_NICHE_DIVIDER_CLASS,
  HERO_PAGE_FRAME_INNER_CLASS,
  HERO_VIEWPORT_SHELL_CLASS,
} from "@/lib/site-layout";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll-to-section";
import { ColorBends } from "./ColorBends";
import { SiteHeader } from "./SiteHeader";
import { BlurredInfiniteSlider } from "./ui/infinite-slider";

function PartnerLogos() {
  const iconCls = "h-5 w-5 shrink-0 text-neutral-900 lg:h-6 lg:w-6";
  const labelCls =
    "whitespace-nowrap text-[15px] font-semibold tracking-tight text-neutral-900 lg:text-lg";

  const items: { label: string; icon: ReactNode }[] = [
    {
      label: "Encrypted",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Irish lines",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 3.5h3.2l1.2 3.2-1.8 1.3a11 11 0 0 0 5.4 5.4l1.3-1.8 3.2 1.2V16a2.5 2.5 0 0 1-2.5 2.5A13.5 13.5 0 0 1 4.5 6 2.5 2.5 0 0 1 7 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Live voice",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="19" cy="5" r="2" fill="currentColor" />
          <path
            d="M4 11v2M7 8v8M10 6v12M13 9v6M16 7v10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "GDPR",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      label: "EU hosted",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 20h8M12 16v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "99.95% uptime",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 13l4-4 4 4 5-7 5 9"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="hero-fade hero-fade-d6 flex w-full min-w-0 flex-col items-center overflow-hidden md:flex-row">
      <div className="hidden flex-shrink-0 md:block md:max-w-52 md:border-r md:border-neutral-200 md:pr-6 md:text-left">
        <p className="text-sm font-medium text-neutral-600">
          Trusted infrastructure, built for businesses.
        </p>
      </div>
      <div className="w-full min-w-0 overflow-hidden py-4 md:py-6 md:flex-1">
        <BlurredInfiniteSlider
          speedOnHover={20}
          speed={40}
          gap={72}
          fadeWidth={80}
        >
          {items.map(({ label, icon }) => (
            <div
              key={label}
              className="flex shrink-0 items-center gap-3 text-neutral-900"
            >
              {icon}
              <span className={labelCls}>{label}</span>
            </div>
          ))}
        </BlurredInfiniteSlider>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div
      className="min-h-0 bg-white text-neutral-900 antialiased selection:bg-neutral-300 selection:text-neutral-900"
    >

      <div
        className={cn(
          HERO_VIEWPORT_SHELL_CLASS,
          HERO_PAGE_FRAME_INNER_CLASS,
          "bg-white lg:mx-auto lg:max-w-[1920px] lg:min-h-0 lg:bg-white lg:p-6 lg:pt-8 lg:pb-0",
        )}
      >
        <div
          className={cn(
            HERO_NICHE_CARD_CLASS,
            "shadow-sm ring-black/[0.06] lg:min-h-[calc(100svh-12rem)] lg:max-h-[820px] lg:flex-none lg:rounded-[3.5rem]",
          )}
          style={{ background: "linear-gradient(115deg, #222222 0%, #292929 48%, #393939 75%, #626262 100%)" }}
        >
            {/* Neutral silver movement stays on the right; the copy retains a dark backdrop. */}
            <div
              aria-hidden
              className="hero-bg-wipe pointer-events-none absolute inset-0"
            >
              <ColorBends
                colors={["#f2f2f2", "#d5d5d5", "#929292", "#626262", "#292929"]}
                rotation={110}
                speed={0.18}
                scale={1.15}
                frequency={1.05}
                warpStrength={1.2}
                bandWidth={5}
                intensity={1.35}
                noise={0.06}
                iterations={2}
                mouseInfluence={0.25}
                parallax={0.2}
                transparent
                className="opacity-50 lg:opacity-75"
              />
            </div>

            {/* Desktop-only mask override: let the animation breathe wider on lg+ */}
            <style jsx global>{`
        .charcoal-hero-header a[aria-label="HelloCara home"] img { filter: brightness(0) invert(1); }
        .charcoal-hero-header > div > button { background: rgb(255 255 255 / .1); }
        .charcoal-hero-header > div > button span,
        .charcoal-hero-header > div > button svg,
        .charcoal-hero-header > button,
        .charcoal-hero-header nav > a,
        .charcoal-hero-header nav > div > button,
        .charcoal-hero-header nav > div > button svg { color: #fff; }
        .charcoal-hero-header nav > a { background: transparent; }
        .charcoal-hero-header nav > a:hover,
        .charcoal-hero-header nav > div > button:hover,
        .charcoal-hero-header nav > div > button[data-open="true"] { background: rgb(255 255 255 / .14); color: white; }
        .charcoal-hero-header nav > a:last-child { background: #fff; color: #292929; }
        .charcoal-hero-header nav > a:last-child:hover { background: #e5e5e5; }
      
              @media (min-width: 1024px) {
                .hero-bg-wipe {
                  -webkit-mask-image: linear-gradient(
                    100deg,
                    transparent 30%,
                    rgba(0, 0, 0, 0.55) 55%,
                    #000 80%
                  ) !important;
                  mask-image: linear-gradient(
                    100deg,
                    transparent 30%,
                    rgba(0, 0, 0, 0.55) 55%,
                    #000 80%
                  ) !important;
                }
              }
            `}</style>

            {/* One-shot diagonal sweep, desktop only (linear mask caused a harsh band on narrow viewports) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
              style={{
                WebkitMaskImage:
                  "linear-gradient(100deg, transparent 35%, rgba(0,0,0,0.6) 60%, #000 85%)",
                maskImage:
                  "linear-gradient(100deg, transparent 35%, rgba(0,0,0,0.6) 60%, #000 85%)",
              }}
            >
              <div
                className="hero-sweep absolute inset-y-0 left-0 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                  filter: "blur(20px)",
                }}
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(34,34,34,0.9) 0%, rgba(34,34,34,0.6) 56%, transparent 100%)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  x="50%"
                  y="0"
                  width="256"
                  height="256"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 128 124 L 128 132 M 124 128 L 132 128"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.08"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            <div
              className={cn(
                HERO_NICHE_CARD_INNER_CLASS,
                "relative z-[2] lg:min-h-[calc(100svh-12rem)] lg:max-h-[820px]",
              )}
            >
              <SiteHeader animated homeScroll surface="hero" className="charcoal-hero-header" />

              <div className="z-10 mt-16 flex max-w-5xl flex-col sm:mt-28 lg:mb-auto lg:mt-auto lg:flex-none">
                <h1
                  id="hero-heading"
                  className="hero-fade hero-fade-d3 font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-balance text-white sm:text-5xl lg:text-[7.5rem] lg:leading-[1.05] lg:pb-1.5"
                >
                  Your phone,{" "}<span className="bg-gradient-to-r from-white to-[#b8b8b8] bg-clip-text text-transparent">always answered.</span>
                </h1>
                <p className="hero-fade hero-fade-d4 mt-6 max-w-3xl text-base leading-relaxed text-[#e5e5e5] lg:mt-8 lg:text-3xl lg:font-normal lg:leading-snug lg:tracking-tight">
                  HelloCara answers your business phone when you can&apos;t.
                  Cara talks with callers, answers their questions, and gathers
                  the details your team needs to follow up.
                </p>
                <div className="hero-fade hero-fade-d5 mt-6 flex w-full flex-col gap-2.5 sm:mt-12 sm:w-auto sm:flex-row sm:justify-start sm:gap-4 lg:mt-8">
                  <Link
                    href="/book"
                    className="flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-7 py-3 text-base font-normal text-[#292929] transition-colors hover:bg-neutral-200 sm:w-auto"
                  >
                    Contact us
                  </Link>
                  <button
                    type="button"
                    onClick={() => scrollToSection("cara")}
                    className="flex w-full cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black/15 px-7 py-3 text-base font-normal text-white transition-colors hover:bg-white/15 sm:w-auto"
                  >
                    Hear it work
                  </button>
                </div>
              </div>
            </div>
        </div>

        <div className={HERO_NICHE_DIVIDER_CLASS} aria-hidden>
          <div className="h-px min-h-px bg-neutral-200" />
        </div>

        {/* Partner strip: desktop only so mobile hero fills the viewport */}
        <div className="mt-4 hidden px-6 pb-3 sm:px-10 sm:pb-10 lg:block lg:mt-12 lg:px-20 lg:pb-8">
          <PartnerLogos />
        </div>
      </div>
    </div>
  );
}
