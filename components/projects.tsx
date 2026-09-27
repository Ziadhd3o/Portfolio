"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, ExternalLink, Shield } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/badge"
import { projects } from "@/lib/portfolio-data"
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05 },
}

const conceptVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05, borderColor: "oklch(0.8 0.13 195 / 0.6)" },
}

const techVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.15 + i * 0.03, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05, color: "oklch(0.8 0.13 195)" },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
  hover: { x: 4 },
}

export function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="projects" muted>
      <SectionHeader
        index="06"
        eyebrow="Projects"
        title="Security-focused projects & labs"
        description="Practical builds for learning offensive techniques in a safe, authorized environment."
      />

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className="group flex flex-col rounded-xl border border-border bg-card/60 p-6"
            variants={cardVariants}
            whileHover="hover"
            style={{ transitionDelay: shouldReduceMotion ? 0 : i * 100 }}
          >
            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40"
                variants={badgeVariants}
                whileHover="hover"
              >
                {project.category}
              </motion.span>
              {project.placeholder && (
                <motion.span
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs transition-all hover:border-border/50"
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  Placeholder
                </motion.span>
              )}
            </motion.div>

            <motion.h3
              className="mt-4 text-xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {project.name}
            </motion.h3>

            <motion.dl
              className="mt-4 space-y-3 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-cyber">Problem</dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">{project.problem}</dd>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-cyber">What I built</dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">{project.built}</dd>
              </motion.div>
            </motion.dl>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Security concepts</p>
              <motion.div className="mt-2 flex flex-wrap gap-1.5" variants={{ ...sectionVariants, staggerChildren: 0.03 }} initial="hidden" animate="visible">
                {project.concepts.map((c, idx) => (
                  <motion.span
                    key={c}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs transition-all hover:border-cyber/40 hover:text-foreground"
                    variants={conceptVariants}
                    whileHover="hover"
                  >
                    {c}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-4 flex flex-wrap gap-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              {project.tech.map((t, idx) => (
                <motion.span
                  key={t}
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-cyber"
                  variants={techVariants}
                  whileHover="hover"
                >
                  #{t}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5"
              initial="hidden"
              animate="visible"
              variants={{ ...sectionVariants, staggerChildren: 0.08 }}
            >
              {project.github ? (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm transition-all hover:border-cyber/40 hover:text-cyber"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </motion.a>
              ) : null}
              {project.demo ? (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-cyber px-3 py-1.5 text-sm font-medium text-cyber-foreground transition-all hover:opacity-90 hover:shadow-[0_0_15px_-3px_oklch(0.8_0.13_195)]"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </motion.a>
              ) : null}
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}