"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "./constants";
import { Avatar } from "@/components/base/avatar/avatar";
import { NavMenuItemLink } from "@/components/marketing/header-navigation/base-components/nav-menu-item";
import { assets } from "@/public/assets";
import { PROFILE_INFO } from "@/data/personal-info";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <>
      {/* ── Desktop navbar (hidden on mobile) ── */}
      <div className="hidden md:flex fixed top-10 left-1/2 -translate-x-1/2 z-50 items-center justify-center w-full px-20">
        <header className="flex items-center rounded-full border border-white/10 bg-[#0c0c0c]/70 backdrop-blur-xl px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

          {/* Avatar beside Home */}
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors active:scale-95 mr-1"
          >
            <Avatar
              size="sm"
              src={assets.avatar.logo.src}
              initials={PROFILE_INFO.name}
              className="bg-fg-brand-primary text-white! border-none shrink-0"
            />
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10 mx-1" />

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

      {/* ── Mobile navbar (hidden on desktop) ── */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;