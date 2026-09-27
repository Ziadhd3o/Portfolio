"use client"

import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Target, ShieldCheck } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/badge"
import { education, type TimelineItem } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -8,
    boxShadow: "0 25px 50px -15px oklch(0.8 0.13 195 / 0.15), 0 0 0 1px oklch(0.8 0.13 195 / 0.2)",
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
    transition: { duration: 0.3, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { scale: 1.05 },
}

const detailVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

function EducationCard({ item, index }: { item: TimelineItem; index: number }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group relative rounded-2xl border border-border bg-card/60 p-6 sm:p-8 transition-all duration-300"
      variants={cardVariants}
      whileHover="hover"
      style={{ transitionDelay: shouldReduceMotion ? 0 : index * 100 }}
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <motion.div
          className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyber/10 text-cyber"
          variants={iconVariants}
          whileHover="hover"
        >
          <GraduationCap className="h-7 w-7" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.div className="flex flex-wrap items-center justify-between gap-3" variants={detailVariants}>
            <motion.h3 className="text-xl font-semibold leading-snug">{item.title}</motion.h3>
            <motion.span
              className="shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="text-xs">{item.period}</Badge>
            </motion.span>
          </motion.div>

          <motion.p className="mt-1 text-cyber font-medium" variants={detailVariants} style={{ transitionDelay: "50ms" }}>
            {item.org}
          </motion.p>

          <motion.ul className="mt-4 space-y-2" variants={detailVariants} style={{ transitionDelay: "100ms" }}>
            {item.points.map((p, i) => (
              <motion.li
                key={p}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <motion.span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.2 + i * 0.1 }}
                  aria-hidden
                />
                <span>{p}</span>
              </motion.li>
            ))}
          </motion.ul>

          {item.skills && item.skills.length > 0 && (
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {item.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40"
                  variants={badgeVariants}
                  whileHover="hover"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber" aria-hidden />
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyber/10 text-cyber">
          <Award className="h-4 w-4" />
        </div>
      </motion.div>
    </motion.article>
  )
}

export function Education() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="education">
      <SectionHeader
        index="06"
        eyebrow="Education"
        title="Academic background"
        description="Formal education providing the theoretical foundation for my cybersecurity practice."
      />

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {education.map((item, i) => (
          <EducationCard key={item.title} item={item} index={i} />
        ))}
      </motion.div>

      <motion.div
        className="mt-16 grid gap-6 sm:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div
          className="rounded-2xl border border-border bg-card/60 p-6 text-center"
          whileHover={{ y: -8, boxShadow: "0 25px 50px -15px oklch(0.8 0.13 195 / 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyber/10 text-cyber"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <BookOpen className="h-7 w-7" />
          </motion.div>
          <h4 className="font-semibold text-lg">Relevant Coursework</h4>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              "Data Structures & Algorithms",
              "Computer Networks",
              "Operating Systems",
              "Database Systems",
              "Web Technologies",
              "Information Security",
              "Cryptography",
              "Software Engineering",
            ].map((course) => (
              <motion.span
                key={course}
                className="rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-border bg-card/60 p-6 text-center"
          whileHover={{ y: -8, boxShadow: "0 25px 50px -15px oklch(0.8 0.13 195 / 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyber/10 text-cyber"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Target className="h-7 w-7" />
          </motion.div>
          <h4 className="font-semibold text-lg">Security Focus Areas</h4>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              "Web Application Security",
              "API Security",
              "Network Security",
              "Linux Security",
              "Vulnerability Assessment",
              "Penetration Testing",
            ].map((focus) => (
              <motion.span
                key={focus}
                className="rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {focus}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-border bg-card/60 p-6 text-center"
          whileHover={{ y: -8, boxShadow: "0 25px 50px -15px oklch(0.8 0.13 195 / 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyber/10 text-cyber"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ShieldCheck className="h-7 w-7" />
          </motion.div>
          <h4 className="font-semibold text-lg">Current Pursuits</h4>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <motion.p className="flex items-center justify-center gap-2" whileHover={{ x: 4 }}>
              <span className="text-cyber">→</span> eJPT Certification Preparation
            </motion.p>
            <motion.p className="flex items-center justify-center gap-2" whileHover={{ x: 4 }}>
              <span className="text-cyber">→</span> Advanced Web Pentesting Labs
            </motion.p>
            <motion.p className="flex items-center justify-center gap-2" whileHover={{ x: 4 }}>
              <span className="text-cyber">→</span> Active Directory Security
            </motion.p>
            <motion.p className="flex items-center justify-center gap-2" whileHover={{ x: 4 }}>
              <span className="text-cyber">→</span> CTF Competition Practice
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}