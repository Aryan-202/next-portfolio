'use client'
import { useState, useEffect } from 'react'
import { Menu, X, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavLinks } from './nav-links'
import { PROFILE_INFO } from '@/data'
import { CTA_BUTTON } from './constants'
import styles from './navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Placeholder content */}
            <div className={styles.logoSection}>
              <div className={styles.profileImage} />
              <div className="space-y-1">
                <div className="h-5 w-24 bg-muted rounded animate-pulse" />
                <div className="h-3 w-16 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Logo and Profile Section */}
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
              <div className={styles.profileImage}>
                <Image
                  src={PROFILE_INFO.profileImage}
                  alt={`${PROFILE_INFO.name} - ${PROFILE_INFO.title}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority
                />
              </div>
              <div>
                <h1 className={styles.name}>{PROFILE_INFO.name}</h1>
                <p className={styles.title}>{PROFILE_INFO.title}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavLinks variant="desktop" />

          {/* Right Side Actions */}
          <div className={styles.actions}>
            {/* Desktop CTA Button */}
            <Button
              asChild
              className={styles.ctaButton}
              title={CTA_BUTTON.description}
            >
              <Link href={CTA_BUTTON.href}>
                {CTA_BUTTON.text}
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={styles.mobileMenuButton}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
              <span className={styles.visuallyHidden}>
                {isMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className={styles.mobileMenu}
            role="menu"
            aria-label="Mobile navigation"
          >
            <NavLinks variant="mobile" onLinkClick={closeMenu} />
            
            {/* Mobile CTA Button */}
            <Button
              asChild
              size="sm"
              className={styles.mobileCtaButton}
              title={CTA_BUTTON.description}
            >
              <Link href={CTA_BUTTON.href} onClick={closeMenu}>
                <MessageSquare className="mr-2 h-4 w-4" />
                {CTA_BUTTON.text}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar