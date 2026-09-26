"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Target, Award, Trophy, Zap, Sparkles } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { achievements } from "@/lib/portfolio-data"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -8,
    scale: 1.02,
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
  hover: { scale: 1.15, rotate: 10 },
}

const valueVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.3 },
  },
  hover: { scale: 1.05, textShadow: "0 0 20px oklch(0.8 0.13 195)" },
}

const icons = [Target, Award, Trophy, Zap]

export function Achievements() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="achievements" muted>
      <SectionHeader
        index="12"
        eyebrow="Achievements"
        title="Milestones worth tracking"
        description="Verifiable learning milestones. Update the placeholders with your real numbers."
      />

      <motion.div
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.article
              key={a.label}
              className="rounded-xl border border-border bg-card/60 p-6 text-center relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              style={{ transitionDelay: shouldReduceMotion ? 0 : i * 80 }}
            >
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <motion.span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyber/10 text-cyber"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Icon className="h-4 w-4" />
                </motion.span>
              </motion.div>

              <motion.p
                className="font-mono text-3xl font-semibold text-cyber tabular-nums relative z-10"
                variants={valueVariants}
                whileHover="hover"
              >
                {a.value}
              </motion.p>

              <motion.p
                className="mt-2 text-sm leading-relaxed text-muted-foreground relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {a.label}
              </motion.p>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cyber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              />
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}