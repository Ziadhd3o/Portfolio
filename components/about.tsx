"use client"

import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap, Target, Lightbulb, ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/badge"

const interests = [
  "Web Application Security",
  "API Security",
  "Penetration Testing",
  "Vulnerability Assessment",
  "Reconnaissance",
  "Linux",
  "Network Security",
  "Active Directory",
]

const learning = ["TryHackMe", "Hack The Box", "PortSwigger Academy", "Home Labs", "CTFs", "Security Projects"]

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
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
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

const listVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { x: 4 },
}

export function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="about">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="A student building real offensive-security skills"
        description="Learning by doing — one lab, one vulnerability, and one writeup at a time."
      />

      <motion.div
        className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="rounded-xl border border-border bg-card/60 p-6 sm:p-8"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.p className="leading-relaxed text-muted-foreground" variants={listVariants}>
            I&apos;m a Computer Science student developing practical experience in cybersecurity and penetration
            testing. My focus is offensive security: understanding how modern web applications and APIs break, and
            learning to test them methodically and responsibly.
          </motion.p>
          <motion.p className="mt-4 leading-relaxed text-muted-foreground" variants={listVariants} style={{ transitionDelay: "100ms" }}>
            Most of my experience comes from consistent, hands-on practice rather than job titles. I work through
            structured labs, deliberately vulnerable applications, and CTF challenges to build depth across web
            security, reconnaissance, networking, and Linux.
          </motion.p>

          <motion.div className="mt-6" variants={listVariants} style={{ transitionDelay: "200ms" }}>
            <motion.p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyber" whileHover={{ x: 4 }}>
              <Target className="h-4 w-4" />
              Interests
            </motion.p>
            <motion.div className="mt-3 flex flex-wrap gap-2" variants={{ ...sectionVariants, staggerChildren: 0.03 }} initial="hidden" animate="visible">
              {interests.map((i, idx) => (
                <motion.span
                  key={i}
                  className="rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40"
              //             inline-flex items-center gap-1.5 rounded-md border border-cyber/20 bg-cyber/5 px-2.5 py-1 text-xs font-mono text-cyber transition-all hover:border-cyber/40
                  variants={badgeVariants}
                  whileHover="hover"
                >
                  {i}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="grid gap-6" variants={{ ...sectionVariants, staggerChildren: 0.1 }} initial="hidden" animate="visible">
          <motion.div
            className="rounded-xl border border-border bg-card/60 p-6"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyber" whileHover={{ x: 4 }}>
              <Lightbulb className="h-4 w-4" />
              Hands-on Learning
            </motion.p>
            <motion.div className="mt-3 flex flex-wrap gap-2" variants={{ ...sectionVariants, staggerChildren: 0.03 }} initial="hidden" animate="visible">
              {learning.map((l, idx) => (
                <motion.span
                  key={l}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs transition-all hover:border-border/50"
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {l}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-xl border border-border bg-card/60 p-6"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyber" whileHover={{ x: 4 }}>
              <GraduationCap className="h-4 w-4" />
              Currently
            </motion.p>
            <motion.ul className="mt-3 space-y-2">
              {[
                { text: "Pursuing a B.Sc. in Computer Science", icon: GraduationCap },
                { text: "Training as a Vulnerability Analyst & Pentester (DEPI)", icon: Target },
                { text: "Preparing for the eJPT certification", icon: ArrowRight },
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  className="flex gap-2 text-sm text-muted-foreground"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <span className="text-cyber">→</span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}