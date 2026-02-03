"use client"

import React from 'react'
import { motion } from 'motion/react'
import { FEEDBACK_DATA } from './constants'
import FeedbackCard from './feedback-card'
import styles from './feedback.module.css'

const FeedbackSection = () => {
    const [showAll, setShowAll] = React.useState(false);
    const displayedFeedback = showAll ? FEEDBACK_DATA : FEEDBACK_DATA.slice(0, 6);

    return (
        <section id="feedback" className="py-20 px-4 scroll-animate relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header - Fixed to match common site style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Client Feedback</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what some of my clients and colleagues have to say about working with me.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {displayedFeedback.map((feedback, index) => (
                        <FeedbackCard
                            key={`${feedback.name}-${index}`}
                            feedback={feedback}
                            index={index}
                        />
                    ))}
                </div>

                {FEEDBACK_DATA.length > 6 && (
                    <div className={styles.footer_actions}>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className={styles.showMoreBtn}
                        >
                            {showAll ? 'Show Less' : 'View All Testimonials'}
                        </button>
                    </div>
                )}
            </div>

            {/* Background elements for premium feel */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>
        </section>
    )
}

export default FeedbackSection;
