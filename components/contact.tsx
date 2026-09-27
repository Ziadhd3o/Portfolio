"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Mail, MapPin, Radio, ArrowUpRight, Shield, Send } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { profile, socials } from "@/lib/portfolio-data"

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

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { x: 4 },
}

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { y: -4, borderColor: "oklch(0.8 0.13 195 / 0.6)" },
}

export function Contact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="contact">
      <SectionHeader
        index="14"
        eyebrow="Contact"
        title="Let's talk security"
        description="Open to junior penetration testing roles, internships, and collaboration on security projects."
      />

      <motion.div
        className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="rounded-xl border border-border bg-card/60 p-6 sm:p-8"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.p
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyber"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ x: 4 }}
          >
            <motion.span
              className="h-4 w-4"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Radio className="h-4 w-4" />
            </motion.span>
            {profile.status}
          </motion.p>

          <motion.p
            className="mt-4 leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            The fastest way to reach me is by email. I&apos;m happy to share more about my labs, writeups, and
            hands-on experience.
          </motion.p>

          <motion.div
            className="mt-6 space-y-3"
            initial="hidden"
            animate="visible"
            variants={{ ...sectionVariants, staggerChildren: 0.08 }}
          >
            <motion.a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3 transition-all"
              variants={linkVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyber/10 text-cyber"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                aria-hidden
              >
                <Mail className="h-4 w-4" />
              </motion.span>
              <motion.span className="font-mono text-sm">{profile.email}</motion.span>
            </motion.a>

            <motion.div
              className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3"
              variants={linkVariants}
              whileHover={{ x: 4 }}
            >
              <motion.span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyber/10 text-cyber"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                aria-hidden
              >
                <MapPin className="h-4 w-4" />
              </motion.span>
              <motion.span className="font-mono text-sm text-muted-foreground">{profile.location}</motion.span>
            </motion.div>
          </motion.div>

          <motion.a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyber px-5 py-2.5 text-sm font-medium text-cyber-foreground transition-all hover:opacity-90 hover:shadow-[0_0_20px_-5px_oklch(0.8_0.13_195)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="h-4 w-4" />
            Send Email
          </motion.a>
        </motion.div>

        <motion.div
          className="rounded-xl border border-border bg-card/60 p-6 sm:p-8"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.p
            className="font-mono text-xs uppercase tracking-wider text-cyber"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ x: 4 }}
          >
            Find me online
          </motion.p>

          <motion.div
            className="mt-4 grid gap-3 sm:grid-cols-2"
            variants={{ ...sectionVariants, staggerChildren: 0.08 }}
            initial="hidden"
            animate="visible"
          >
            {socials.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3 transition-all"
                variants={socialVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyber/10 text-cyber"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                  >
                    <Shield className="h-4 w-4" />
                  </motion.span>
                  <div>
                    <span className="block text-sm font-medium">{social.label}</span>
                    <span className="block font-mono text-xs text-muted-foreground">{social.handle}</span>
                  </div>
                </motion.div>
                <motion.span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyber/5 text-muted-foreground transition-all group-hover:text-cyber"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}