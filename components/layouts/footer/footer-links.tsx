// components/layouts/footer/footer-links.tsx
'use client'

import Image from 'next/image'
import { assets } from '@/public/assets'
import styles from './footer.module.css'

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      {/* GitHub */}
      <a
        href="https://github.com/Aryan-202"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Visit my GitHub profile"
        title="Connect on GitHub"
      >
        <Image
          src={assets.logos.github}
          alt="GitHub"
          width={16}
          height={16}
          className={styles.socialIcon}
        />
      </a>
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aryanspf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Visit my LinkedIn profile"
        title="Connect on LinkedIn"
      >
        <Image
          src={assets.logos.linkedin}
          alt="LinkedIn"
          width={16}
          height={16}
          className={styles.socialIcon}
        />
      </a>
      
      {/* X (Twitter) */}
      <a
        href="https://x.com/AryanxSenpai"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Visit my X (Twitter) profile"
        title="Connect on X (Twitter)"
      >
        <Image
          src={assets.logos.x}
          alt="X (Twitter)"
          width={16}
          height={16}
          className={styles.socialIcon}
        />
      </a>
    </div>
  )
}