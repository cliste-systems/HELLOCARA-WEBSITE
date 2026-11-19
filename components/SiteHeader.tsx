"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, AudioLines, ChevronDown, ChevronRight, LayoutDashboard, Menu, Phone, Play, ShieldCheck, Store, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CARA_NAV,
  HOW_CARA_IS_BUILT_LINK,
  HOW_CARA_WORKS_LINK,
  YOUR_DASHBOARD_LINK,
  PRODUCTS_NAV,
  type HeaderNavMenu,
} from "@/lib/industries";
import { scrollToSectionAfterMenuClose } from "@/lib/scroll-to-section";

import { LoginLink } from "./LoginLink";
import { ClisteLogo } from "./ClisteLogo";

type SiteHeaderProps = {
  showAccountActions?: boolean;
  /** Hero entrance fades (homepage only). */
  animated?: boolean;
  /** Smooth-scroll to #cara on Hear it work (homepage mobile menu). */
  homeScroll?: boolean;
  /** Hero gradient vs plain white page background. */
  surface?: "hero" | "light";
  className?: string;
};

function fadeClass(animated: boolean, delay: string) {
  return animated ? `hero-fade ${delay}` : "";
}

function HeaderDropdown({
  menu,
  surface,
  className = "",
  onNavigate,
}: {
  menu: HeaderNavMenu;
  surface: "hero" | "light";
  className?: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const showMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const hideMenuSoon = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const triggerClassName =
    surface === "hero"
      ? "group/trigger flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-white/55 hover:text-neutral-950 data-[open=true]:bg-white/70"
      : "group/trigger flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-slate-100/80 hover:text-neutral-950 data-[open=true]:bg-slate-100";

  const menuItemClassName =
    surface === "hero"
      ? "group/item flex items-center justify-between gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-[0_8px_28px_-14px_rgba(21,21,21,0.22)] backdrop-blur-md transition-all hover:border-white/80 hover:bg-white/90 hover:shadow-[0_12px_32px_-14px_rgba(21,21,21,0.26)]"
      : "group/item flex items-center justify-between gap-3 rounded-full border border-slate-200/90 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition-all hover:border-slate-300/90 hover:bg-slate-50 hover:shadow-md";

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`.trim()}
      onMouseEnter={showMenu}
      onMouseLeave={hideMenuSoon}
      onFocus={showMenu}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          hideMenuSoon();
        }
      }}
    >
      <button
        type="button"
        className={triggerClassName}
        data-open={open}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        {menu.trigger}
        <ChevronDown
          className={`h-3.5 w-3.5 text-neutral-500 transition-transform duration-200 group-hover/trigger:text-neutral-700 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.75}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+0.35rem)] z-50 min-w-[11.5rem]"
            role="menu"
            aria-label={menu.trigger}
          >
            {menu.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={menuItemClassName}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                {item.label}
                <ChevronRight
                  className="size-3.5 shrink-0 text-slate-400 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-slate-600"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const subscribeMounted = () => () => {};

export function SiteHeader({
  showAccountActions = true,
  animated = false,
  homeScroll = false,
  surface = animated ? "hero" : "light",
  className = "",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(subscribeMounted, () => true, () => false);


  useEffect(() => {
    if (!menuOpen) return;
    const trigger = menuTriggerRef.current;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => menuRef.current?.querySelector<HTMLButtonElement>('button')?.focus(), 0);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab") return;
      const controls = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
      trigger?.focus();
    };
  }, [menuOpen]);

  const loginClassName =
    surface === "hero"
      ? "cursor-pointer rounded-full border border-white/50 bg-white/50 px-5 py-2 text-sm font-medium text-neutral-950 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80"
      : "cursor-pointer rounded-full border border-slate-200/90 bg-white px-5 py-2 text-sm font-medium text-neutral-950 shadow-sm transition-all hover:bg-slate-50";

  const navLinkClassName =
    surface === "hero"
      ? "flex cursor-pointer items-center rounded-full px-3 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-white/55 hover:text-neutral-950"
      : "flex cursor-pointer items-center rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-slate-100/80 hover:text-neutral-950";

  return (
    <>
      <header
        className={`flex w-full shrink-0 items-center justify-between ${className}`.trim()}
      >
        <div className="z-10 flex min-w-0 items-center gap-4 sm:gap-6 lg:gap-8">
          <Link
            href="/"
            className={`${fadeClass(animated, "hero-fade-d1")} flex shrink-0 cursor-pointer items-center`}
            aria-label="HelloCara home"
          >
            <ClisteLogo />
          </Link>

          <button
            type="button"
            className={`${fadeClass(animated, "hero-fade-d2")} hidden min-w-0 cursor-pointer items-center gap-2 rounded-full bg-black/5 px-3.5 py-1.5 transition-colors hover:bg-black/10 2xl:flex`}
          >
            <span className="truncate text-sm font-medium text-neutral-800">
              A Donegal-engineered startup
            </span>
            <ChevronRight
              className="h-4 w-4 shrink-0 text-neutral-600"
              strokeWidth={1.5}
              aria-hidden
            />
          </button>
        </div>

        <nav
          className={`${fadeClass(animated, "hero-fade-d2")} z-10 hidden items-center gap-3 lg:flex`}
        >
          <Link href={HOW_CARA_WORKS_LINK.href} className={navLinkClassName}>
            {HOW_CARA_WORKS_LINK.label}
          </Link>
          <Link href={HOW_CARA_IS_BUILT_LINK.href} className={navLinkClassName}>
            {HOW_CARA_IS_BUILT_LINK.label}
          </Link>
          <Link href={YOUR_DASHBOARD_LINK.href} className={navLinkClassName}>
            {YOUR_DASHBOARD_LINK.label}
          </Link>
          <HeaderDropdown menu={PRODUCTS_NAV} surface={surface} />
          {showAccountActions ? <><LoginLink className={loginClassName}>Log in</LoginLink>
          <a href="/book" className="cursor-pointer rounded-full bg-[#292929] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#151515]">Book a demo</a></> : null}
        </nav>

        <button
          type="button"
          className={`${fadeClass(animated, "hero-fade-d2")} -mr-2 z-10 cursor-pointer p-2 text-neutral-950 lg:hidden`}
          ref={menuTriggerRef}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden />
        </button>
      </header>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                key="mobile-menu"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
                className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[#fafafa] text-[#202020] lg:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Explore HelloCara"
              >
                <div className="mx-auto flex min-h-full w-full max-w-lg flex-col px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))]">
                  <div className="mb-6 flex items-center justify-between">
                    <Link href="/" aria-label="HelloCara home" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
                      <ClisteLogo />
                      <span className="text-xl font-semibold tracking-tight">HelloCara</span>
                    </Link>
                    <button type="button" className="flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors hover:bg-neutral-100" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                      <X className="size-5" strokeWidth={1.5} aria-hidden />
                    </button>
                  </div>
                  <div className="mb-4 flex items-end justify-between">
                    <h2 className="text-3xl font-medium tracking-tight">Meet your next<br />team member.</h2>
                    <span className="pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">Explore Cara</span>
                  </div>
                  <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2.5">
                    {[
                      { ...CARA_NAV.items[0], icon: Phone, detail: "From ring to resolution" },
                      { ...CARA_NAV.items[1], icon: ShieldCheck, detail: "The thinking behind Cara" },
                      { ...CARA_NAV.items[2], icon: LayoutDashboard, detail: "Your calls, in one place" },
                      { ...PRODUCTS_NAV.items[0], icon: Store, detail: "Made for your business" },
                    ].map(({ href, label, icon: Icon, detail }) => (
                      <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="group rounded-[20px] bg-[#ededed] p-4 transition-colors hover:bg-[#e5e5e5]">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="flex size-9 items-center justify-center rounded-xl bg-white"><Icon className="size-[18px]" strokeWidth={1.6} aria-hidden /></span>
                          <ArrowUpRight className="size-4 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                        </div>
                        <span className="block text-[15px] font-medium tracking-tight">{label}</span>
                        <span className="mt-1 block text-[11px] leading-4 text-neutral-600">{detail}</span>
                      </Link>
                    ))}
                  </nav>
                  <Link href="/#cara" onClick={(event) => {
                    if (homeScroll) {
                      event.preventDefault();
                      scrollToSectionAfterMenuClose("cara", () => setMenuOpen(false));
                    } else setMenuOpen(false);
                  }} className="group relative mt-3 flex min-h-36 overflow-hidden rounded-[22px] bg-[#292929] p-5 text-white">
                    <div className="relative z-10 flex flex-col items-start justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-neutral-300"><AudioLines className="size-3.5" aria-hidden /> The voice of Cara</span>
                      <span className="mt-2 text-2xl font-medium tracking-tight">Hear Cara.</span>
                      <span className="mt-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-neutral-900"><Play className="size-3" aria-hidden /> Listen to a sample</span>
                    </div>
                    <span className="absolute inset-y-0 right-0 w-[42%] overflow-hidden"><Image src="/cara.png" alt="" width={220} height={250} className="h-full w-full scale-110 object-cover object-center" /></span>
                  </Link>
                  <div className="mt-5 border-t border-neutral-200 pt-4">
                    {showAccountActions && <div className="grid grid-cols-2 gap-2.5">
                      <LoginLink onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium transition-colors hover:bg-neutral-100">Log in</LoginLink>
                      <a href="/book" onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#292929] text-sm font-medium text-white transition-colors hover:bg-[#151515]">Book a demo <ArrowUpRight className="size-4" aria-hidden /></a>
                    </div>}
                    <Link href="/book" onClick={() => setMenuOpen(false)} className="mt-4 flex min-h-11 items-center justify-between px-1 text-sm text-neutral-600 hover:text-neutral-950">
                      <span>Have a question?</span><span className="flex items-center gap-2 font-medium text-neutral-900">Contact us <ArrowUpRight className="size-4" aria-hidden /></span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
