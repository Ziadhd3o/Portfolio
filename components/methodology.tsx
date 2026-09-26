"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { methodology } from "@/lib/portfolio-data"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -4,
    boxShadow: "0 20px 40px -12px oklch(0.8 0.13 195 / 0.15), 0 0 0 1px oklch(0.8 0.13 195 / 0.2)",
    borderColor: "oklch(0.8 0.13 195 / 0.3)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 },
  },
  hover: { scale: 1.1, textShadow: "0 0 10px oklch(0.8 0.13 195)" },
}

const noteVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
}

export function Methodology() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="methodology" muted>
      <SectionHeader
        index="10"
        eyebrow="Methodology"
        title="How I approach a security assessment"
        description="A repeatable, structured workflow — always carried out with explicit authorization."
      />

      <motion.div
        className="mt-8 flex items-start gap-3 rounded-lg border border-cyber/25 bg-cyber/5 p-4 text-sm text-muted-foreground"
        variants={noteVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="mt-0.5 h-5 w-5 shrink-0 text-cyber"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.3 }}
          aria-hidden
        >
          <ShieldAlert className="h-5 w-5" />
        </motion.span>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          All testing is performed only against systems I own or have explicit, written permission to assess. Scope and
          rules of engagement are agreed before any activity begins.
        </motion.p>
      </motion.div>

      <motion.ol
        className="mt-10 grid gap-4 sm:grid-cols-2"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {methodology.map((m, i) => (
          <motion.li
            key={m.step}
            className="flex gap-4 rounded-xl border border-border bg-card/60 p-5"
            variants={cardVariants}
            whileHover="hover"
            style={{ transitionDelay: shouldReduceMotion ? 0 : i * 80 }}
          >
            <motion.span
              className="font-mono text-sm text-cyber tabular-nums shrink-0 w-8 text-right"
              variants={numberVariants}
              whileHover="hover"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-medium">{m.step}</h3>
              <motion.p
                className="mt-1 text-sm leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {m.detail}
              </motion.p>
            </motion.div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}