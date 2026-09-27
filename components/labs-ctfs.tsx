"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, FlaskConical, Target, Bug, Network, Server, Terminal, Lock, Code2, Globe } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/badge"
import { platforms } from "@/lib/portfolio-data"

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05, borderColor: "oklch(0.8 0.13 195 / 0.6)" },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
  hover: { x: 4 },
}

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "TryHackMe": Target,
  "Hack The Box": Bug,
  "PortSwigger Web Security Academy": Globe,
}

export function LabsCtfs() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="labs">
      <SectionHeader
        index="07"
        eyebrow="Hands-On Labs & CTFs"
        title="Evidence of continuous, practical learning"
        description="The platforms where I sharpen skills against realistic, authorized targets."
      />

      <motion.div
        className="mt-12 grid gap-6 lg:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {platforms.map((platform, i) => {
          const PlatformIcon = platformIcons[platform.name] || FlaskConical
          return (
            <motion.article
              key={platform.name}
              className="flex flex-col rounded-xl border border-border bg-card/60 p-6"
              variants={cardVariants}
              whileHover="hover"
              style={{ transitionDelay: shouldReduceMotion ? 0 : i * 100 }}
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
                  <PlatformIcon className="h-4 w-4" aria-hidden />
                </motion.span>
                <h3 className="font-semibold">{platform.name}</h3>
              </motion.div>

              <motion.p
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {platform.blurb}
              </motion.p>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Skills practiced</p>
                <motion.div
                  className="mt-2 flex flex-wrap gap-1.5"
                  variants={{ ...sectionVariants, staggerChildren: 0.03 }}
                  initial="hidden"
                  animate="visible"
                >
                  {platform.skills.map((s, idx) => (
                    <motion.span
                      key={s}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs transition-all hover:border-cyber/40 hover:text-cyber"
                      variants={badgeVariants}
                      whileHover="hover"
                    >
                      {s}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 border-t border-border pt-5 font-mono text-xs text-cyber transition-all"
                variants={linkVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                View profile
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="h-3 w-3" />
                </motion.span>
              </motion.a>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}