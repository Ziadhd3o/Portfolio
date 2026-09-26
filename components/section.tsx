"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  muted?: boolean
}

export function Section({ id, children, className, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 border-t border-border/60", muted && "bg-card/30", className)}
    >
      {muted && (
        <div className="pointer-events-none absolute inset-0 subtle-gradient-bg" aria-hidden />
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">{children}</div>
    </section>
  )
}