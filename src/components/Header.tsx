"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/store";
import { Tooltip } from "./Tooltip";

const shopLinks = [
  { href: "/shop", label: "Main shop" },
  { href: "/shop/nimble-drones", label: "Nimble Drones" },
  { href: "/shop/educational", label: "Educational Robots" },
  { href: "/shop/industrial", label: "Industrial Robots" },
  { href: "/shop/service", label: "Service Robots" },
  { href: "/shop/specialty", label: "Specialty Robots" },
  { href: "/shop/accessories", label: "Accessories" },
];

export function Header() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const navLinkClass =
    "text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors";
  const dropdownClass =
    "block rounded px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-gray-900/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="RoboCollective.ai home"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={mode === "dark" ? "/assets/light/Logo 4 light.png" : "/assets/dark/Logo 4 dark.png"}
            alt="RoboCollective.ai logo"
            className="h-9 w-auto sm:h-10"
          />
          <strong className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
            RoboCollective.ai
          </strong>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <Link href="/rent" className={navLinkClass}>
            Rent
          </Link>
          <Link href="/resell" className={navLinkClass}>
            Resell
          </Link>
          <div
            className="group relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <span className={`cursor-pointer ${navLinkClass}`}>Shop</span>
            <div
              className={`absolute left-0 top-full pt-1 transition-opacity ${
                shopOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="min-w-[200px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg dark:border-white/10 dark:bg-gray-900">
                {shopLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={dropdownClass}
                    onClick={() => setShopOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
          <a
            href="https://hephaestus.international/"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Internships
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Tooltip content={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            <button
              type="button"
              onClick={() => dispatch(toggleTheme())}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mode === "dark" ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5 7.5-1.4-1.4M7.9 7.9 6.5 6.5m12 0-1.4 1.4M7.9 16.1 6.5 17.5" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
                </svg>
              )}
            </button>
          </Tooltip>
          <Link
            href="/contact"
            className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-orange-600 sm:px-4"
          >
            Talk with us
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-gray-900 lg:hidden">
          <nav className="flex flex-col gap-1">
<Link href="/about" className={navLinkClass + " rounded-lg px-4 py-3"} onClick={() => setMobileOpen(false)}>
            About
          </Link>
            <Link href="/rent" className={navLinkClass + " rounded-lg px-4 py-3"} onClick={() => setMobileOpen(false)}>
              Rent
            </Link>
            <Link href="/resell" className={navLinkClass + " rounded-lg px-4 py-3"} onClick={() => setMobileOpen(false)}>
              Resell
            </Link>
            <div className="px-4 py-2">
              <span className="text-sm font-medium text-slate-500 dark:text-gray-400">Shop</span>
              <div className="mt-2 flex flex-col gap-1">
                {shopLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={dropdownClass + " ml-2"}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" className={navLinkClass + " rounded-lg px-4 py-3"} onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className={navLinkClass + " rounded-lg px-4 py-3"} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a
              href="https://hephaestus.international/"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass + " rounded-lg px-4 py-3"}
              onClick={() => setMobileOpen(false)}
            >
              Internships
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
