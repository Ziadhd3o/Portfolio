"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Clock, BookOpen, Shield, Bug, Terminal, Globe, Network, Key, Lock, Code2 } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { notes } from "@/lib/portfolio-data"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -8,
    boxShadow: "0 25px 50px -15px oklch(0.8 0.13 195 / 0.15), 0 0 0 1px oklch(0.8 0.13 195 / 0.3)",
    borderColor: "oklch(0.8 0.13 195 / 0.4)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.2 },
  },
  hover: { scale: 1.1, rotate: 5 },
}

const topicVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } },
  hover: { x: 4 },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
  hover: { x: 4 },
}

const topicIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Web Fundamentals": Globe,
  "Web Security": Shield,
  "Access Control": Lock,
  "API Security": Network,
  "Vulnerabilities": Bug,
  "AD Security": Terminal,
}

export function Notes() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="notes">
      <SectionHeader
        index="13"
        eyebrow="Latest Security Notes"
        title="Short technical notes & explainers"
        description="Bite-sized write-ups on the fundamentals I'm studying and revisiting."
      />

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {notes.map((note, i) => {
          const TopicIcon = topicIcons[note.topic] || BookOpen
          return (
            <motion.article
              key={note.title}
              className="group h-full"
              variants={cardVariants}
              whileHover="hover"
              style={{ transitionDelay: shouldReduceMotion ? 0 : i * 80 }}
            >
              <motion.a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-xl border border-border bg-card/60 p-5 transition-all"
              >
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className="font-mono text-xs text-cyber flex items-center gap-1.5"
                    variants={topicVariants}
                    whileHover="hover"
                  >
                    <motion.span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cyber/10 text-cyber"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <TopicIcon className="h-3 w-3" />
                    </motion.span>
                    {note.topic}
                  </motion.span>
                  <motion.span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyber/5 text-muted-foreground transition-all group-hover:bg-cyber/10 group-hover:text-cyber"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </motion.div>

                <motion.h3
                  className="mt-3 flex-1 text-base font-medium leading-snug"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {note.title}
                </motion.h3>

                <motion.p
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground"
                  variants={linkVariants}
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cyber/10 text-cyber"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Clock className="h-3.5 w-3.5" />
                  </motion.span>
                  {note.minutes} min read
                </motion.p>
              </motion.a>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}