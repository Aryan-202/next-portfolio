'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Sparkles, Rocket, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HERO_CONTENT, HERO_TECH_STACK } from './constants'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Content */}
          <div className={styles.content}>
            {/* Badges */}
            <div className={styles.badges}>
              {HERO_CONTENT.badges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  <Sparkles className="mr-2 h-3 w-3" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Headings */}
            <div className={styles.heading}>
              <h1 className={styles.title}>
                {HERO_CONTENT.title}
              </h1>
              <h2 className={styles.subtitle}>
                {HERO_CONTENT.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className={styles.description}>
              {HERO_CONTENT.description}
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <Button asChild size="lg" className={styles.ctaPrimary}>
                <Link href={HERO_CONTENT.cta.primary.href}>
                  <Rocket className="mr-2 h-5 w-5" />
                  {HERO_CONTENT.cta.primary.text}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className={styles.ctaSecondary}>
                <Link href={HERO_CONTENT.cta.secondary.href}>
                  {HERO_CONTENT.cta.secondary.text}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {HERO_CONTENT.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              <div className={styles.techStackTitle}>Tech Stack</div>
              <div className={styles.techStackItems}>
                {HERO_TECH_STACK.map((tech) => (
                  <span key={tech} className={styles.techStackItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className={styles.profileSection}>
            <div className={styles.profileContainer}>
              {/* Profile Image */}
              <div className={styles.profileImageWrapper}>
                <Image
                  src={HERO_CONTENT.profileImage}
                  alt={`${HERO_CONTENT.title} - ${HERO_CONTENT.subtitle}`}
                  fill
                  className={styles.profileImage}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Elements */}
              <div className={styles.floatingElement}>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Digital Strategy</span>
                </div>
              </div>
              <div className={styles.floatingElement}>
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>
              <div className={styles.floatingElement}>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Clean Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollIndicatorText}>Scroll</span>
          <ArrowDown className={styles.scrollIndicatorArrow} />
        </div>
      </div>
    </section>
  )
}

export default Hero