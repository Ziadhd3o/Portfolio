import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({ index, eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="font-mono text-xs text-cyber">{index}</span>
        <span className="h-px w-8 bg-cyber/40" aria-hidden />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className={cn("mt-3 text-pretty leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
