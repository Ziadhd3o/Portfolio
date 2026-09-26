import { Terminal } from "lucide-react"
import { profile, socials } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 font-mono text-sm font-semibold">
            <Terminal className="h-4 w-4 text-cyber" aria-hidden />
            {profile.handle}
          </a>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
            Ethical hacking only. All testing is performed with explicit authorization on systems I own or am
            permitted to assess.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-cyber"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 font-mono text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
