"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Award, ExternalLink, CheckCircle2, Clock } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/badge"
import { certifications } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

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

const statusVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 } },
  hover: { scale: 1.05 },
}

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
  hover: { x: 4, color: "oklch(0.8 0.13 195)" },
}

export function Certifications() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="certifications" muted>
      <SectionHeader
        index="08"
        eyebrow="Certifications & Training"
        title="Credentials and structured programs"
        description="Certifications and training I have earned or am actively working toward."
      />

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert, i) => (
          <motion.article
            key={cert.name}
            className="flex flex-col rounded-xl border border-border bg-card/60 p-6"
            variants={cardVariants}
            whileHover="hover"
            style={{ transitionDelay: shouldReduceMotion ? 0 : i * 100 }}
          >
            <motion.div
              className="flex items-start justify-between gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyber/10 text-cyber ring-1 ring-inset ring-cyber/20"
                variants={iconVariants}
                whileHover="hover"
              >
                <Award className="h-5 w-5" aria-hidden />
              </motion.span>
              <motion.span
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs ring-1 ring-inset whitespace-nowrap",
                  cert.status === "Earned"
                    ? "bg-cyber/15 text-cyber ring-cyber/25"
                    : "bg-amber-400/10 text-amber-300 ring-amber-400/25",
                )}
                variants={statusVariants}
                whileHover="hover"
              >
                {cert.status === "Earned" ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    {cert.status}
                  </>
                ) : (
                  <>
                    <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                    {cert.status}
                  </>
                )}
              </motion.span>
            </motion.div>

            <motion.h3
              className="mt-4 text-lg font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {cert.name}
            </motion.h3>

            <motion.p
              className="mt-1 text-sm text-cyber"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {cert.provider}
            </motion.p>

            <motion.p
              className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {cert.description}
            </motion.p>

            <motion.div
              className="mt-5 flex items-center justify-between border-t border-border pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <motion.span
                className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-mono transition-all hover:border-cyber/40 hover:bg-cyber/5 hover:text-cyber"
                whileHover={{ scale: 1.02 }}
              >
                {cert.date}
              </motion.span>
              {cert.credentialUrl ? (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-cyber transition-all"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  Credential
                  <ExternalLink className="h-3 w-3" />
                </motion.a>
              ) : null}
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}