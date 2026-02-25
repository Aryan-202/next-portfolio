"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "./constants";
import { Avatar } from "@/components/base/avatar/avatar";
import { assets } from "@/public/assets";
import { PROFILE_INFO } from "@/data/personal-info";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (name: string) => {
    setExpandedItem((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Floating pill bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <Link href="/" className="flex items-center">
          <Avatar
            size="sm"
            src={assets.avatar.logo.src}
            initials={PROFILE_INFO.name}
            className="bg-fg-brand-primary text-white! border-none shrink-0"
          />
        </Link>

        <div className="w-px h-4 bg-white/10" />

        <span className="text-sm font-medium text-white/60 px-1">
          {PROFILE_INFO.name}
        </span>

        <div className="w-px h-4 bg-white/10" />

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all active:scale-90"
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </button>
      </div>

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-up drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[70] rounded-t-3xl border-t border-white/10 bg-[#0c0c0c] transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Handle + close */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <div className="mx-auto w-10 h-1 rounded-full bg-white/20" />
        </div>

        <div className="flex items-center justify-between px-5 pb-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5"
          >
            <Avatar
              size="sm"
              src={assets.avatar.logo.src}
              initials={PROFILE_INFO.name}
              className="bg-fg-brand-primary text-white! border-none shrink-0"
            />
            <span className="text-sm font-semibold text-white">
              {PROFILE_INFO.name}
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
            aria-label="Close menu"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Nav links */}
        <nav className="flex flex-col px-3 py-3 pb-10 max-h-[70vh] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            if (link.sublinks) {
              const isExpanded = expandedItem === link.name;
              return (
                <div key={link.name}>
                  <button
                    onClick={() => toggleExpanded(link.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.name}
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="ml-3 mt-1 mb-2 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {link.sublinks.map((sublink) => {
                        const Icon = sublink.icon;
                        return (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                          >
                            {Icon && (
                              <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 text-white/50 shrink-0">
                                <Icon className="size-3.5" />
                              </span>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-white/80 leading-tight">
                                {sublink.name}
                              </p>
                              {sublink.description && (
                                <p className="text-xs text-white/40 mt-0.5 leading-snug line-clamp-2">
                                  {sublink.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;