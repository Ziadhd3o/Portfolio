"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X, ShieldCheck, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems, profile } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

const navLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -1 },
  active: { color: "var(--foreground)" },
}

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
}

const cvButtonVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -2, scale: 1.02, boxShadow: "0 0 20px -5px oklch(0.8 0.13 195 / 0.4)" },
  tap: { scale: 0.98 },
}

const logoVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("home")
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const navLinks = navItems.map((item, index) => {
    const isActive = active === item.href.slice(1)
    return (
      <motion.li
        key={item.href}
        variants={navLinkVariants}
        initial="hidden"
        animate="visible"
        style={{ transitionDelay: shouldReduceMotion ? 0 : index * 0.03 }}
      >
        <motion.a
          href={item.href}
          className={cn(
            "relative rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground",
            isActive && "text-foreground",
          )}
          whileHover="hover"
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.span
                className="absolute inset-x-3 -bottom-0.5 h-px bg-cyber"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                aria-hidden
              />
            )}
          </AnimatePresence>
        </motion.a>
      </motion.li>
    )
  })

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled ? "h-14" : "h-[4.5rem]",
        )}
      >
        <motion.a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-semibold"
          whileHover="hover"
          whileTap="tap"
          variants={logoVariants}
        >
          <motion.span
            className="h-5 w-5 text-cyber transition-transform group-hover:scale-110"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShieldCheck className="h-5 w-5" />
          </motion.span>
          <span className="tracking-tight">
            {profile.name === "[ADD YOUR NAME]" ? "sec.folio" : profile.name}
          </span>
        </motion.a>

        <ul className="hidden lg:flex items-center gap-2">
          <motion.ul variants={{ ...navLinkVariants, staggerChildren: 0.03 }} className="flex items-center gap-2">
            {navLinks}
          </motion.ul>
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <motion.a
            href="/Ziad.pdf"
            download="Ziad-Hodeeb-CV.pdf"
            className="inline-flex"
            variants={cvButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <Button variant="outline" className="gap-1.5 border-cyber/30 text-cyber hover:border-cyber/50" size="xs">
              <FileText className="h-3 w-3" />
              <span>CV</span>
            </Button>
          </motion.a>

          <motion.a
            href="#contact"
            className="rounded-md bg-cyber px-3 py-1.5 text-xs font-medium text-cyber-foreground transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_-5px_oklch(0.8_0.13_195)]"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Let&apos;s Talk
          </motion.a>

          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              <motion.ul variants={{ ...navLinkVariants, staggerChildren: 0.05 }}>
                {navItems.map((item) => (
                  <motion.li key={item.href} variants={navLinkVariants} initial="hidden" animate="visible">
                    <motion.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:text-foreground",
                        active === item.href.slice(1) && "bg-secondary text-foreground",
                      )}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.li className="mt-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-cyber px-3 py-3 text-center text-base font-medium text-cyber-foreground"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let&apos;s Talk
                </motion.a>
              </motion.li>

              <motion.li className="mt-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <motion.a
                  href="/Ziad.pdf"
                  download="Ziad-Hodeeb-CV.pdf"
                  onClick={() => setOpen(false)}
                  className="block rounded-md border border-cyber/30 bg-cyber/5 px-3 py-3 text-center text-base font-medium text-cyber transition-colors hover:border-cyber/50 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    Download CV
                  </span>
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}