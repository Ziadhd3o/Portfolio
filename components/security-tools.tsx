"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { toolGroups } from "@/lib/portfolio-data"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -4,
    boxShadow: "0 20px 40px -12px oklch(0.8 0.13 195 / 0.15), 0 0 0 1px oklch(0.8 0.13 195 / 0.2)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const toolVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.1 + i * 0.03, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05, y: -2, borderColor: "oklch(0.8 0.13 195 / 0.6)", color: "oklch(0.8 0.13 195)" },
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

export function SecurityTools() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="tools" muted>
      <SectionHeader
        index="04"
        eyebrow="Security Toolkit"
        title="Tools I use in labs and assessments"
        description="Grouped by the stage of testing they support."
      />

      <motion.div
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {toolGroups.map((group, i) => {
          const Icon = group.icon
          return (
            <motion.article
              key={group.category}
              className="rounded-xl border border-border bg-card/60 p-6"
              variants={cardVariants}
              whileHover="hover"
              style={{ transitionDelay: shouldReduceMotion ? 0 : i * 80 }}
            >
              <motion.div
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyber/10 text-cyber ring-1 ring-inset ring-cyber/20"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </motion.span>
                <h3 className="font-semibold">{group.category}</h3>
              </motion.div>
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{ ...sectionVariants, staggerChildren: 0.03 }}
              >
                {group.tools.map((tool, idx) => (
                  <motion.span
                    key={tool}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-all"
                    variants={toolVariants}
                    whileHover="hover"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}