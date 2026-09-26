import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type BadgeProps = {
  children: ReactNode
  className?: string
  variant?: "default" | "cyber" | "outline"
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs leading-none",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "cyber" && "bg-cyber/10 text-cyber ring-1 ring-inset ring-cyber/25",
        variant === "outline" && "border border-border text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}
