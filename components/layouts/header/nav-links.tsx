// components/layouts/header/nav-links.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./constants";
import styles from "./navbar.module.css";

interface NavLinksProps {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  variant = "desktop",
  onLinkClick,
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    // For home page
    if (href === "/") {
      return pathname === href;
    }
    // For hash links on home page
    if (href.startsWith("#")) {
      return pathname === "/" && href === window.location.hash;
    }
    // For other routes
    return pathname === href;
  };

  const handleClick = (href: string) => {
    // If it's a hash link and we're not on home page, navigate to home first
    if (href.startsWith("#") && pathname !== "/") {
      window.location.href = `/${href}`;
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  };

  if (variant === "desktop") {
    return (
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.navLink} ${
              isActive(link.href) ? styles.active : ""
            }`}
            title={link.description}
            aria-current={isActive(link.href) ? "page" : undefined}
            onClick={() => handleClick(link.href)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    );
  }

  // Mobile variant
  return (
    <div className={styles.mobileMenuContent}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={styles.mobileNavLink}
          onClick={() => handleClick(link.href)}
          title={link.description}
          aria-current={isActive(link.href) ? "page" : undefined}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};