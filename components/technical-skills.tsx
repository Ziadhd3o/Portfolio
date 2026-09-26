"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { skillGroups, type SkillLevel } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const levelStyles: Record<SkillLevel, string> = {
  Comfortable: "bg-cyber/15 text-cyber ring-cyber/25",
  "Working Knowledge": "bg-secondary text-secondary-foreground ring-border",
  "Currently Learning": "bg-amber-400/10 text-amber-300 ring-amber-400/25",
}

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

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.1 + i * 0.03, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.02, y: -2 },
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

export function TechnicalSkills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="skills">
      <SectionHeader
        index="03"
        eyebrow="Technical Skills"
        title="Skills, grouped by domain"
        description="Honest proficiency levels — Comfortable, Working Knowledge, or Currently Learning. No percentage theatrics."
      />

      <motion.div
        className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {(Object.keys(levelStyles) as SkillLevel[]).map((lvl, i) => (
          <motion.span
            key={lvl}
            className="inline-flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <motion.span
              className={cn("h-2.5 w-2.5 rounded-full ring-1 ring-inset", levelStyles[lvl])}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              aria-hidden
            />
            {lvl}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {skillGroups.map((group, i) => {
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
              <motion.ul
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{ ...sectionVariants, staggerChildren: 0.03 }}
              >
                {group.skills.map((s, idx) => (
                  <motion.li key={s.name} variants={skillVariants}>
                    <motion.span
                      className={cn(
                        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs ring-1 ring-inset transition-all",
                        levelStyles[s.level],
                      )}
                      title={s.level}
                      whileHover="hover"
                    >
                      {s.name}
                    </motion.span>
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