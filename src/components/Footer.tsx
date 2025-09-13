// FooterMinimal.tsx
// Requisitos: npm i react-icons
// Uso: import FooterMinimal from "./FooterMinimal";  <FooterMinimal />

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Products", href: "#" },
  { label: "Contact", href: "#" },
];

const SOCIALS = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaTwitter, label: "Twitter", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

function SocialIcon({
  Icon,
  label,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
    >
      <Icon className="text-base" />
    </a>
  );
}

function FooterMinimal() {
  return (
    <footer className="w-full bg-transparent py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
        {/* Logo */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black/5 dark:bg-white/10">
          <img
            src="/aop.png"
            alt="Company Logo"
            className="h-16 w-16 object-contain"
            loading="lazy"
          />
        </div>

        {/* Nav */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-black dark:text-white">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ Icon, label, href }) => (
            <SocialIcon key={label} Icon={Icon} label={label} href={href} />
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-black/70 dark:text-white/70">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterMinimal;
