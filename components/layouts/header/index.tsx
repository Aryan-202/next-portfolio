"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "./constants";
import { Avatar } from "@/components/base/avatar/avatar";
import { NavMenuItemLink } from "@/components/marketing/header-navigation/base-components/nav-menu-item";
import { assets } from "@/public/assets";
import { PROFILE_INFO } from "@/data/personal-info";
import { cx } from "@/lib/utils/cx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center w-full px-20">
      {/* Left side: Avatar Container */}
      <div
        className={cx(
          "flex items-center transition-all duration-700 ease-in-out origin-left",
          isScrolled
            ? "opacity-0 -translate-x-full max-w-0"
            : "opacity-100 max-w-[400px]"
        )}
      >
        <Link
          href="/"
          className="group flex items-center p-0.5 rounded-full border border-white/10 bg-[#0c0c0c]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all hover:bg-[#0c0c0c] active:scale-95 shrink-0"
        >
          <Avatar
            size="md"
            src={assets.avatar.logo.src}
            initials="AS"
            className="bg-fg-brand-primary text-white! border-none shrink-0"
          />
          <div className="max-w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-w-48 group-hover:ml-3">
            <div className="flex flex-col whitespace-nowrap pr-4">
              <span className="text-sm font-bold text-white tracking-wide">{PROFILE_INFO.name}</span>
              <span className="text-[10px] tracking-widest text-white/50 font-medium">{PROFILE_INFO.subtitle}</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Middle/Right side: Navigation Pill Container */}
      <div
        className={cx(
          "flex-1 flex transition-all duration-700 ease-in-out",
          isScrolled ? "justify-center" : "justify-end"
        )}
      >
        <header className="flex items-center rounded-full border border-white/10 bg-[#0c0c0c]/70 backdrop-blur-xl px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              if (link.sublinks) {
                return (
                  <div key={link.name} className="relative group px-1">
                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:text-white group-hover:text-white">
                      {link.name}
                      <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 scale-95 group-hover:scale-100 origin-top">
                      <div className="w-[600px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0c0c] p-4 shadow-2xl">
                        <div className="grid grid-cols-2 gap-2">
                          {link.sublinks.map((sublink) => (
                            <NavMenuItemLink
                              key={sublink.name}
                              href={sublink.href}
                              title={sublink.name}
                              subtitle={sublink.description}
                              icon={sublink.icon}
                              className="hover:bg-white/5 rounded-xl transition-colors max-w-none! items-center"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 transition-all hover:text-white"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </header>
      </div>
    </div>
  );
};


export default Navbar;
