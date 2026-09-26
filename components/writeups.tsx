"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Shield, Bug, Terminal, Search, Key, Lock, Globe } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { writeups, type Writeup } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const difficultyStyles: Record<Writeup["difficulty"], string> = {
  Easy: "bg-cyber/15 text-cyber ring-cyber/25",
  Medium: "bg-amber-400/10 text-amber-300 ring-amber-400/25",
  Hard: "bg-destructive/15 text-red-300 ring-destructive/30",
}

const difficultyIcons: Record<Writeup["difficulty"], React.ComponentType<{ className?: string }>> = {
  Easy: Shield,
  Medium: Bug,
  Hard: Terminal,
}

const DifficultyIcon = ({ difficulty, className }: { difficulty: Writeup["difficulty"]; className?: string }) => {
  const Icon = difficultyIcons[difficulty]
  return <Icon className={className} />
}

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.05 },
}

const toolVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.15 + i * 0.03, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05, color: "oklch(0.8 0.13 195)" },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
  hover: { x: 4 },
}

export function Writeups() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="writeups">
      <SectionHeader
        index="09"
        eyebrow="Security Writeups"
        title="Technical writeups & research notes"
        description="Documenting how vulnerabilities work, how I find them, and how they're fixed."
      />

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {writeups.map((w, i) => (
          <motion.article
            key={w.title}
            className="group flex flex-col rounded-xl border border-border bg-card/60 p-6"
            variants={cardVariants}
            whileHover="hover"
            style={{ transitionDelay: shouldReduceMotion ? 0 : i * 100 }}
          >
            <motion.div
              className="flex items-center justify-between gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="font-mono text-xs text-cyber flex items-center gap-1.5"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {w.vulnerability}
              </motion.span>
              <motion.span
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[11px] ring-1 ring-inset flex items-center gap-1",
                  difficultyStyles[w.difficulty],
                )}
                variants={badgeVariants}
                whileHover="hover"
              >
                <DifficultyIcon difficulty={w.difficulty} className="h-2.5 w-2.5" />
                {w.difficulty}
              </motion.span>
            </motion.div>

            <motion.h3
              className="mt-3 text-base font-semibold leading-snug"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {w.title}
            </motion.h3>

            <motion.p
              className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {w.summary}
            </motion.p>

            <motion.p
              className="mt-4 font-mono text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="text-foreground/70">target:</span> {w.target}
            </motion.p>

            <motion.div
              className="mt-2 flex flex-wrap gap-1.5"
              initial="hidden"
              animate="visible"
              variants={{ ...sectionVariants, staggerChildren: 0.03 }}
            >
              {w.tools.map((t, idx) => (
                <motion.span
                  key={t}
                  className="font-mono text-xs text-muted-foreground rounded-md px-2 py-0.5 bg-background/60 transition-all hover:text-cyber hover:bg-cyber/5"
                  variants={toolVariants}
                  whileHover="hover"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 border-t border-border pt-4 font-mono text-xs text-cyber transition-all"
              variants={linkVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              Read more
              <motion.span
                className="inline-block"
                whileHover={{ x: 4, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.span>
            </motion.a>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}