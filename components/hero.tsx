"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Mail, FileText, ExternalLink, Globe, Shield, Terminal, Lock } from "lucide-react"
import { Badge } from "@/components/badge"
import { profile, socials } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const particleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: [0, 0.4, 0],
    scale: [0, 1, 0],
    x: [0, (i % 2 === 0 ? 20 : -20)],
    y: [0, (i % 3 === 0 ? -15 : 15)],
    transition: {
      duration: 3 + i * 0.5,
      delay: i * 0.3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
}

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -2, scale: 1.02 },
  tap: { scale: 0.98 },
}

const socialVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -2 },
}

const profileImageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 25px 50px -12px oklch(0.8 0.13 195 / 0.3), 0 0 0 1px oklch(0.8 0.13 195 / 0.2), inset 0 1px 0 oklch(1 0 0 / 0.05)",
    borderColor: "oklch(0.8 0.13 195 / 0.4)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
  },
}

const techTagsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
}

const techTags = ["OWASP Top 10", "Burp Suite", "Nmap", "Linux", "Python", "Recon", "API Security"]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const glowAnimation = shouldReduceMotion ? {} : {
    animate: {
      opacity: [0.15, 0.25, 0.15],
      scale: [1, 1.05, 1],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  }

  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${15 + i * 12}%`,
    left: `${10 + (i % 3) * 25}%`,
    delay: i * 0.5,
  }))

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />

      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyber/10 blur-[120px]"
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        {...glowAnimation}
      />

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      <motion.div
        className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:pb-28"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN - Text content */}
        <motion.div variants={itemVariants} className="lg:order-1">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-cyber/25 bg-cyber/5 px-3 py-1 font-mono text-xs text-cyber"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="relative flex h-2 w-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber opacity-60"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber" />
            </motion.span>
            {profile.status}
          </motion.span>

          <motion.h1
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.role}
          </motion.h1>

          <motion.p
            className="mt-3 font-mono text-sm text-cyber sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial="hidden"
            animate="visible"
            variants={{ ...heroContainerVariants, staggerChildren: 0.08, delayChildren: 0.4 }}
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-cyber px-5 py-2.5 text-sm font-medium text-cyber-foreground transition-all duration-200 hover:shadow-[0_0_20px_-5px_oklch(0.8_0.13_195)] hover:shadow-cyber/30"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>

            <motion.button
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/Ziad.pdf'
                link.download = 'Ziad-Hodeeb-CV.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="group inline-flex items-center gap-2 rounded-md border border-cyber/30 bg-cyber/5 px-5 py-2.5 text-sm font-medium text-cyber transition-all duration-200 hover:border-cyber/50 hover:shadow-[0_0_20px_-5px_oklch(0.8_0.13_195_/0.2)]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </motion.button>

            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:border-border/50"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            initial="hidden"
            animate="visible"
            variants={{ ...heroContainerVariants, staggerChildren: 0.06, delayChildren: 0.5 }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                variants={socialVariants}
                whileHover="hover"
              >
                {s.label}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="h-3 w-3" />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          {/* Tech tags - mobile only, in left column */}
          <motion.div className="mt-10 lg:hidden" variants={techTagsVariants}>
            <div className="flex flex-wrap gap-2 border-t border-border pt-6">
              {techTags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - Profile image + tech tags on desktop */}
        <motion.div
          className="relative lg:order-2"
          variants={itemVariants}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative" aria-hidden>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber/5 via-transparent to-cyber/5 blur-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              {...glowAnimation}
            />

            <motion.div
              className="absolute inset-0 rounded-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-cyber/30 blur-sm"
                  style={{
                    width: "4px",
                    height: "4px",
                    top: p.top,
                    left: p.left,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={particleVariants.animate(p.id)}
                  transition={particleVariants.animate(p.id).transition}
                />
              ))}

              
            </motion.div>

            <motion.div
              className="relative overflow-hidden aspect-square max-w-xs mx-auto lg:max-w-none rounded-2xl border border-cyber/20 bg-gradient-to-br from-cyber/10 via-transparent to-cyber/5 shadow-[0_20px_40px_-12px_oklch(0.8_0.13_195/0.25),_0_0_0_1px_oklch(0.8_0.13_195/0.1),_inset_0_1px_0_oklch(1_0_0/0.05)] backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              variants={profileImageVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="/IMG_20260616_145601_193.jpg.jpeg"
                  alt="Professional profile photo"
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-card border border-cyber/10">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyber/20 bg-cyber/5">
                      <Terminal className="h-8 w-8 text-cyber" />
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">Profile Image</p>
                    <p className="text-xs text-muted-foreground/50 mt-1">Add /profile.jpg to public folder</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  className="flex items-center gap-1.5 rounded-lg border border-cyber/20 bg-cyber/5 px-3 py-1.5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-cyber"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-cyber">WEB SEC</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-1.5 rounded-lg border border-cyber/20 bg-cyber/5 px-3 py-1.5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-cyber"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                  <span className="font-mono text-xs text-cyber">API SEC</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-1.5 rounded-lg border border-cyber/20 bg-cyber/5 px-3 py-1.5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-cyber"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  />
                  <span className="font-mono text-xs text-cyber">PENTEST</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tech tags - desktop only, below profile image in right column */}
            <motion.div className="mt-8 hidden lg:block" variants={techTagsVariants}>
              <div className="flex flex-wrap gap-2 border-t border-border pt-6">
                {techTags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}