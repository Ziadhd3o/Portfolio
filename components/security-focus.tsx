"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { securityFocus } from "@/lib/portfolio-data"

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
  hover: { scale: 1.15, rotate: 8 },
}

const pointVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { x: 4, color: "oklch(0.8 0.13 195)" },
}

export function SecurityFocus() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="focus" muted>
      <SectionHeader
        index="02"
        eyebrow="Security Focus"
        title="Specializations I actively practice"
        description="The areas I concentrate on when studying, building labs, and running assessments."
      />

      <motion.div
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {securityFocus.map((area, i) => {
          const Icon = area.icon
          return (
            <motion.article
              key={area.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6"
              variants={cardVariants}
              whileHover="hover"
              style={{ transitionDelay: shouldReduceMotion ? 0 : i * 100 }}
            >
              <motion.div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyber/5 blur-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                aria-hidden
              />

              <motion.span
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyber/10 text-cyber ring-1 ring-inset ring-cyber/20"
                variants={iconVariants}
                whileHover="hover"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </motion.span>

              <motion.h3
                className="mt-4 text-lg font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {area.title}
              </motion.h3>

              <motion.p
                className="mt-1.5 text-sm leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {area.description}
              </motion.p>

              <motion.ul
                className="mt-4 space-y-1.5"
                initial="hidden"
                animate="visible"
                variants={{ ...sectionVariants, staggerChildren: 0.05 }}
              >
                {area.points.map((p, idx) => (
                  <motion.li
                    key={p}
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors"
                    variants={pointVariants}
                    whileHover="hover"
                  >
                    <motion.span
                      className="h-1 w-1 rounded-full bg-cyber"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.2 + idx * 0.08 }}
                      aria-hidden
                    />
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}