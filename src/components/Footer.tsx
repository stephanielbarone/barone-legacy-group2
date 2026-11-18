import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#142B45] text-white/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-3">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Barone Legacy Group home"
          >
            <Image
              src="/images/barone-legacy-logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="text-lg font-bold text-white">
              BARONE <span className="text-gold-500">LEGACY GROUP</span>
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-[#F7F5F0]/80">
            Dedicated to helping families and business owners build lasting
            financial security, tax-advantaged retirement income, and
            customized life insurance protection.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/#services" className="hover:text-gold-500">
                Retirement &amp; Life Solutions
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold-500">
                Financial Insights Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Service Areas
          </h4>
          <p className="mt-3 text-sm text-[#F7F5F0]/80">
            Servicing all of North America.
          </p>
          <a
            href="https://www.instagram.com/baronelegacygroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-gold-500 hover:text-gold-300"
          >
            Follow us on social media
          </a>
        </div>
      </div>
      <div className="border-t border-white/15 py-6 text-center text-xs text-[#F7F5F0]/80">
        © 2025 Barone Legacy Group. All rights reserved.
        <p className="mt-2">
          Thank you to our technology partners{" "}
          <a
            href="https://www.ClearRoadLabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-500 hover:text-gold-300"
          >
            www.ClearRoadLabs.com
          </a>
        </p>
      </div>
    </footer>
  );
}
