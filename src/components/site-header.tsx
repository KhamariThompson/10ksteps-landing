"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/download", label: "Download" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-navy-dark/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative h-10 w-10">
            <Image
              src="/10kstepsappicon.png"
              alt="10k Steps"
              fill
              className="rounded-xl"
              priority
            />
          </div>
          <span className="text-xl font-bold">10k Steps</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button as="link" href="/download" variant="primary" size="sm">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-navy-dark/95 backdrop-blur-lg">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button as="link" href="/download" variant="primary" size="md" className="w-full">
              Download App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
