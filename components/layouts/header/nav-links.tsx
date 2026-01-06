import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from './constants'
import styles from './navbar.module.css'

interface NavLinksProps {
  variant?: 'desktop' | 'mobile'
  onLinkClick?: () => void
}

export const NavLinks: React.FC<NavLinksProps> = ({ 
  variant = 'desktop', 
  onLinkClick 
}) => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  if (variant === 'desktop') {
    return (
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
            title={link.description}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    )
  }

  // Mobile variant
  return (
    <div className={styles.mobileMenuContent}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={styles.mobileNavLink}
          onClick={onLinkClick}
          title={link.description}
          aria-current={isActive(link.href) ? 'page' : undefined}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}