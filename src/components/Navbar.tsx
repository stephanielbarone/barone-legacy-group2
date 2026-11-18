"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 text-base font-bold tracking-wide sm:gap-3 sm:text-xl"
          onClick={closeMenu}
          aria-label="Barone Legacy Group home"
        >
          <Image
            src="/images/barone-legacy-logo.png"
            alt=""
            width={52}
            height={52}
            priority
            className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            BARONE <span className="text-gold-500">LEGACY GROUP</span>
          </span>
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded border border-white/30 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-px w-4 bg-white" />
          <span className="h-px w-4 bg-white" />
        </button>
        <nav
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 bg-navy-900 px-6 py-5 text-sm font-medium shadow-md lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:shadow-none`}
          aria-label="Main navigation"
        >
          <Link href="/#services" className="transition hover:text-gold-500" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/#about" className="transition hover:text-gold-500" onClick={closeMenu}>
            About
          </Link>
          <Link href="/faculty" className="transition hover:text-gold-500" onClick={closeMenu}>
            Faculty
          </Link>
          <Link href="/blog" className="transition hover:text-gold-500" onClick={closeMenu}>
            Insights &amp; Blog
          </Link>
          <Link
            href="/#contact"
            className="interactive-button rounded bg-gold-500 px-4 py-2 text-center font-semibold text-navy-900 transition hover:bg-gold-600 hover:text-white"
            onClick={closeMenu}
          >
            Schedule Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
