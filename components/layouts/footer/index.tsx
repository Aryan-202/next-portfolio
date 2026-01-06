'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FOOTER_LINKS, FOOTER_TEXT, CONTACT_INFO } from './constants'
import { SocialLinks } from './footer-links'
import styles from './footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.brandLink}>
              <h2 className={styles.brandName}>Aryan Vishwakarma</h2>
              <p className={styles.brandTitle}>Entrepreneur</p>
            </Link>
            <p className={styles.brandDescription}>
              {FOOTER_TEXT.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.link} title={link.description}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Resources</h3>
            <ul className={styles.linksList}>
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.link} title={link.description}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className={styles.connectSection}>
            <h3 className={styles.sectionTitle}>Let&apos;s Connect</h3>
            <p className={styles.connectText}>
              {FOOTER_TEXT.connectText}
            </p>
            <Button
              asChild
              size="sm"
              className={styles.ctaButton}
            >
              <Link href="/contact">
                {FOOTER_TEXT.ctaButton}
              </Link>
            </Button>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            {FOOTER_TEXT.copyright
              .replace('{year}', currentYear.toString())
              .replace('{name}', 'Aryan Vishwakarma')}
          </p>
          <div className={styles.legalLinks}>
            {FOOTER_LINKS.legal.map((link, index) => (
              <div key={link.name} className={styles.legalLinkWrapper}>
                <Link href={link.href} className={styles.legalLink} title={link.description}>
                  {link.name}
                </Link>
                {index < FOOTER_LINKS.legal.length - 1 && (
                  <span className={styles.separator}>•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer