import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SecurityFocus } from "@/components/security-focus"
import { TechnicalSkills } from "@/components/technical-skills"
import { SecurityTools } from "@/components/security-tools"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { LabsCtfs } from "@/components/labs-ctfs"
import { Certifications } from "@/components/certifications"
import { Writeups } from "@/components/writeups"
import { Methodology } from "@/components/methodology"
import { Reporting } from "@/components/reporting"
import { Achievements } from "@/components/achievements"
import { Notes } from "@/components/notes"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SecurityFocus />
        <TechnicalSkills />
        <SecurityTools />
        <Experience />
        <Education />
        <Projects />
        <LabsCtfs />
        <Certifications />
        <Writeups />
        <Methodology />
        <Reporting />
        <Achievements />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
