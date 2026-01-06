import Image from 'next/image'
import { SOCIAL_LINKS } from '@/data'
import styles from './footer.module.css'

// Import icons directly
import xIcon from '@/public/svgs/twitter-x.svg'
import githubIcon from '@/public/svgs/github.svg'
import linkedinIcon from '@/public/svgs/linkedin.svg'

// Map icon names to imported SVG files
const iconMap: Record<string, any> = {
  github: githubIcon,
  linkedin: linkedinIcon,
  x: xIcon,
}

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      {SOCIAL_LINKS.map((social) => {
        const icon = iconMap[social.icon]
        
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={`Visit my ${social.name} profile`}
            title={`Connect on ${social.name}`}
          >
            {icon && (
              <Image
                src={icon}
                alt={social.name}
                width={16}
                height={16}
                className={styles.socialIcon}
              />
            )}
          </a>
        )
      })}
    </div>
  )
}