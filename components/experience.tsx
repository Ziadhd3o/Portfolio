"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/badge"
import { experience, type TimelineItem } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -4,
    boxShadow: "0 20px 40px -12px oklch(0.8 0.13 195 / 0.15), 0 0 0 1px oklch(0.8 0.13 195 / 0.2)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.2 },
  },
  hover: { scale: 1.2, boxShadow: "0 0 20px oklch(0.8 0.13 195)" },
}

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05, backgroundColor: "oklch(0.8 0.13 195 / 0.2)" },
}

function ExperienceCard({ item, index }: { item: TimelineItem; index: number }) {
  const shouldReduceMotion = useReducedMotion()

  const Icon = item.type === "Education" ? GraduationCap : Briefcase

  return (
    <motion.li
      variants={itemVariants}
      style={{ transitionDelay: shouldReduceMotion ? 0 : index * 100 }}
      className="relative"
    >
      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center">
        <motion.div
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyber/30 bg-cyber/10 text-cyber",
            "z-10 relative"
          )}
          variants={dotVariants}
          whileHover="hover"
        >
          <Icon className="h-4 w-4" />
        </motion.div>

        <motion.div
          className="absolute left-4 top-10 h-[calc(100%+1rem)] w-px bg-border/50"
          variants={lineVariants}
          style={{ transformOrigin: "top center" }}
        />
      </div>

      <motion.div
        className="ml-10 rounded-xl border border-border bg-card/60 p-6 transition-all duration-300"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div className="flex flex-wrap items-center justify-between gap-2">
          <motion.h3 className="text-lg font-semibold" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            {item.title}
          </motion.h3>
          <motion.span
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline">{item.period}</Badge>
          </motion.span>
        </motion.div>

        <motion.p
          className="mt-1 text-sm text-cyber"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {item.org}
        </motion.p>

        <motion.ul className="mt-4 space-y-2">
          {item.points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
            >
              <motion.span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.4 + i * 0.1 }}
                aria-hidden
              />
              {p}
            </motion.li>
          ))}
        </motion.ul>

        {item.skills && item.skills.length > 0 && (
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {item.skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40 hover:bg-cyber/10"
                variants={skillBadgeVariants}
                whileHover="hover"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyber" aria-hidden />
                {skill}
              </motion.span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.li>
  )
}

export function Experience() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="experience">
      <SectionHeader
        index="05"
        eyebrow="Experience"
        title="Professional experience & training"
        description="Hands-on training and practical security experience building my offensive security foundation."
      />

      <motion.div
        className="mt-12 relative"
        variants={timelineVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute left-4 top-10 h-[calc(100%-2rem)] w-px bg-border/50"
          variants={lineVariants}
          style={{ transformOrigin: "top center" }}
        />

        <ul className="space-y-8">
          {experience.map((item, i) => (
            <ExperienceCard key={item.title} item={item} index={i} />
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}