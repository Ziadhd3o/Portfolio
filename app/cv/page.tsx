"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Download, ExternalLink, ArrowLeft, FileText, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function CVPage() {
  const shouldReduceMotion = useReducedMotion()

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const link = document.createElement("a")
    link.href = "/Ziad.pdf"
    link.download = `${profile.name.replace(/\s+/g, "-")}-CV.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenNewTab = () => {
    window.open("/Ziad.pdf", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <motion.section
          id="cv"
          className="relative flex-1 flex flex-col"
          initial="hidden"
          animate="visible"
          variants={pageVariants}
        >
          <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
          <motion.div
            className="pointer-events-none absolute -top-40 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-cyber/10 blur-[120px]"
            aria-hidden
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 w-full flex flex-col">
            <motion.div variants={itemVariants}>
              <motion.div className="flex items-center gap-3 mb-6" whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                <motion.button
                  onClick={() => window.history.back()}
                  className="group inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-border/50"
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="Back to Portfolio"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Portfolio</span>
                </motion.button>
              </motion.div>

              <motion.div className="text-center mb-10">
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full border border-cyber/25 bg-cyber/5 px-4 py-1.5 font-mono text-xs text-cyber mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Curriculum Vitae</span>
                </motion.div>

                <motion.h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  Curriculum Vitae
                </motion.h1>
                <motion.p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                  View or download my latest resume. Built for cybersecurity roles focused on web application security, API security, and penetration testing.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
              variants={{ ...pageVariants, staggerChildren: 0.08, delayChildren: 0.2 }}
            >
              <motion.a
                href="/Ziad.pdf"
                onClick={handleDownload}
                className="group inline-flex items-center gap-2 rounded-md bg-cyber px-6 py-3 text-base font-medium text-cyber-foreground transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_30px_-5px_oklch(0.8_0.13_195)] hover:shadow-cyber/40"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </motion.a>

              <motion.button
                onClick={handleOpenNewTab}
                className="group inline-flex items-center gap-2 rounded-md border border-cyber/30 bg-cyber/5 px-6 py-3 text-base font-medium text-cyber transition-all duration-200 hover:border-cyber/50 hover:shadow-[0_0_20px_-5px_oklch(0.8_0.13_195_/0.2)]"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Open in New Tab</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden flex-1 min-h-[60vh] flex flex-col"
              variants={itemVariants}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center justify-between border-b border-border p-4 bg-card/80">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-cyber" />
                  <span className="font-mono text-sm font-medium">Curriculum Vitae.pdf</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 rounded-full bg-cyber/10 px-2 py-0.5 text-cyber">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyber" />
                    </span>
                    Ready
                  </span>
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden">
                <iframe
                  src="/Ziad.pdf"
                  title="Curriculum Vitae"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="fullscreen"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-card/95 backdrop-blur-sm p-8 text-center hidden" id="pdf-fallback">
                  <div className="max-w-md">
                    <FileText className="mx-auto h-16 w-16 text-cyber/50 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">PDF Viewer</h3>
                    <p className="text-muted-foreground mb-6">
                      Your browser may not support embedded PDF viewing. Use the buttons above to download or open the CV in a new tab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="/Ziad.pdf"
                        onClick={handleDownload}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-cyber px-5 py-2.5 text-sm font-medium text-cyber-foreground transition-opacity hover:opacity-90"
                      >
                        <Download className="h-4 w-4" />
                        Download CV
                      </a>
                      <button
                        onClick={handleOpenNewTab}
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-cyber/30 bg-cyber/5 px-5 py-2.5 text-sm font-medium text-cyber transition-colors hover:border-cyber/50"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Open in New Tab
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 text-center"
              variants={itemVariants}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}