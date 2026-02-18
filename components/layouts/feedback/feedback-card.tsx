"use client"

import React from 'react'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { Feedback } from '@/data/feedback-data'
import styles from './feedback.module.css'

interface FeedbackCardProps {
    feedback: Feedback;
    index: number;
}

const FeedbackCard = ({ feedback, index }: FeedbackCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.card}
        >
            <div className={styles.quoteIcon}>
                <Quote size={24} fill="currentColor" opacity={0.1} />
            </div>

            {feedback.result && (
                <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold">
                    <span>✓</span>
                    <span>{feedback.result}</span>
                </div>
            )}

            <p className={styles.message}>{feedback.message}</p>

            <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={i < feedback.rating ? styles.starFilled : styles.starEmpty}
                        fill={i < feedback.rating ? "currentColor" : "none"}
                    />
                ))}
            </div>

            <div className={styles.footer}>
                <div className={styles.avatar}>
                    {feedback.image ? (
                        <img src={feedback.image} alt={feedback.name} />
                    ) : (
                        <div className={styles.avatarPlaceholder}>
                            {feedback.name.charAt(0)}
                        </div>
                    )}
                </div>
                <div className={styles.info}>
                    <h4 className={styles.name}>{feedback.name}</h4>
                    <p className={styles.role}>{feedback.role}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default FeedbackCard;
