"use client"

import { motion, useReducedMotion } from "framer-motion"
import { FileText, ChevronRight, ShieldCheck } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { reportSections } from "@/lib/portfolio-data"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    x: 4,
    transition: { duration: 0.2 },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
}

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 },
  },
  hover: { scale: 1.2, textShadow: "0 0 10px oklch(0.8 0.13 195)" },
}

export function Reporting() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="reporting">
      <SectionHeader
        index="11"
        eyebrow="Reporting"
        title="What a professional pentest report contains"
        description="Clear communication is half the job. A good report turns findings into fixable, prioritized actions."
      />

      <motion.div
        className="mt-12 overflow-hidden rounded-xl border border-border bg-card/60"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-2.5 border-b border-border px-5 py-4"
        >
          <motion.span
            className="h-4 w-4 text-cyber"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.3 }}
            aria-hidden
          >
            <FileText className="h-4 w-4" />
          </motion.span>
          <motion.span className="font-mono text-sm">assessment-report.pdf</motion.span>
          <motion.span className="ml-auto font-mono text-xs text-muted-foreground">CONFIDENTIAL — SAMPLE</motion.span>
        </motion.div>
        <motion.ol
          className="divide-y divide-border"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {reportSections.map((section, i) => (
            <motion.li
              key={section}
              className="flex items-center gap-4 px-5 py-3.5"
              variants={cardVariants}
              whileHover="hover"
              style={{ transitionDelay: shouldReduceMotion ? 0 : i * 30 }}
            >
              <motion.span
                className="font-mono text-xs text-cyber tabular-nums shrink-0 w-6 text-right"
                variants={numberVariants}
                whileHover="hover"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>
              <motion.span
                className="text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {section}
              </motion.span>
              <motion.span
                className="ml-auto h-1.5 w-1.5 rounded-full bg-cyber/40"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.2 }}
                aria-hidden
              />
              <motion.span
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ opacity: 1, x: 4 }}
              >
                <ChevronRight className="h-4 w-4 text-cyber/50" />
              </motion.span>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </Section>
  )
}