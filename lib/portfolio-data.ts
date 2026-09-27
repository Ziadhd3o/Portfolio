import type { LucideIcon } from "lucide-react"
import {
  Globe,
  Network,
  Radar,
  ShieldCheck,
  Terminal,
  Server,
  Bug,
  KeyRound,
  Search,
  Cpu,
  Code2,
  Boxes,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/*  PERSONAL / IDENTITY                                                        */
/*  Update these values to personalize the portfolio.                          */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Ziad Hodeeb",
  role: "Junior Penetration Tester",
  tagline: "Web Security • API Security • Offensive Security",
  location: "Fayoum, Egypt",
  status: "Open to Opportunities",
  handle: "@XIZ0",
  summary:
    "I'm a Computer Science student focused on offensive security — building practical, hands-on experience in web application penetration testing, API security, vulnerability assessment, and reconnaissance. I test only with proper authorization.",
  email: "ziad.hd3o@gmail.com",
  resumeUrl: "/Ziad.pdf",
}

export type SocialLink = {
  label: string
  href: string
  handle: string
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Ziadhd3o", handle: "/Ziadhd3o" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zhd3o/", handle: "/zhd3o" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/XIZ0", handle: "/XIZ0" },
  { label: "Hack The Box", href: "https://app.hackthebox.com/users/2439095", handle: "/ZiadHodeeb" },
]

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Labs & CTFs", href: "#labs" },
  { label: "Certifications", href: "#certifications" },
  { label: "Writeups", href: "#writeups" },
  { label: "Contact", href: "#contact" },
] as const

/* -------------------------------------------------------------------------- */
/*  SECURITY FOCUS                                                             */
/* -------------------------------------------------------------------------- */

export type FocusArea = {
  title: string
  icon: LucideIcon
  description: string
  points: string[]
}

export const securityFocus: FocusArea[] = [
  {
    title: "Web Application Security",
    icon: Globe,
    description: "Testing modern web apps against the OWASP Top 10 and beyond.",
    points: ["OWASP Top 10", "AuthN / AuthZ", "SQLi & XSS", "IDOR / CSRF / SSRF", "Session security"],
  },
  {
    title: "API Security",
    icon: Boxes,
    description: "Assessing REST APIs for access control and authentication flaws.",
    points: ["REST APIs", "JWT handling", "Broken access control", "Parameter tampering", "API abuse"],
  },
  {
    title: "Reconnaissance",
    icon: Radar,
    description: "Mapping the attack surface before testing begins.",
    points: ["Subdomain enumeration", "DNS enumeration", "Asset discovery", "Tech fingerprinting", "OSINT"],
  },
  {
    title: "Network Security",
    icon: Network,
    description: "Enumerating hosts, services, and protocols across a network.",
    points: ["Network enumeration", "TCP/IP", "Service enumeration", "Nmap", "Protocol analysis"],
  },
  {
    title: "Linux Security",
    icon: Terminal,
    description: "Working comfortably in Linux environments and tooling.",
    points: ["Fundamentals", "Permissions", "Processes & services", "Shell scripting", "Security tooling"],
  },
  {
    title: "Active Directory",
    icon: Server,
    description: "Understanding Windows environments and common attack concepts.",
    points: ["LDAP & Kerberos", "SMB", "Users / Groups / OUs", "GPOs", "Enumeration"],
  },
]

/* -------------------------------------------------------------------------- */
/*  TECHNICAL SKILLS                                                           */
/* -------------------------------------------------------------------------- */

export type SkillLevel = "Comfortable" | "Working Knowledge" | "Currently Learning"

export type SkillGroup = {
  category: string
  icon: LucideIcon
  skills: { name: string; level: SkillLevel }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Web Security",
    icon: Globe,
    skills: [
      { name: "HTTP / HTTPS", level: "Comfortable" },
      { name: "Cookies & Sessions", level: "Comfortable" },
      { name: "Authentication", level: "Comfortable" },
      { name: "Authorization", level: "Working Knowledge" },
      { name: "JWT", level: "Working Knowledge" },
      { name: "CORS", level: "Working Knowledge" },
      { name: "CSP", level: "Working Knowledge" },
      { name: "Same-Origin Policy", level: "Working Knowledge" },
      { name: "OWASP Top 10", level: "Comfortable" },
    ],
  },
  {
    category: "Vulnerabilities",
    icon: Bug,
    skills: [
      { name: "SQL Injection", level: "Comfortable" },
      { name: "XSS", level: "Comfortable" },
      { name: "IDOR", level: "Working Knowledge" },
      { name: "CSRF", level: "Working Knowledge" },
      { name: "SSRF", level: "Working Knowledge" },
      { name: "Path Traversal", level: "Working Knowledge" },
      { name: "Auth vulnerabilities", level: "Working Knowledge" },
      { name: "Host Header attacks", level: "Currently Learning" },
    ],
  },
  {
    category: "Reconnaissance",
    icon: Radar,
    skills: [
      { name: "Subdomain Enumeration", level: "Comfortable" },
      { name: "DNS Enumeration", level: "Working Knowledge" },
      { name: "Asset Discovery", level: "Working Knowledge" },
      { name: "OSINT", level: "Working Knowledge" },
      { name: "Tech Fingerprinting", level: "Working Knowledge" },
    ],
  },
  {
    category: "Networking",
    icon: Network,
    skills: [
      { name: "TCP/IP", level: "Comfortable" },
      { name: "DNS", level: "Comfortable" },
      { name: "HTTP / HTTPS", level: "Comfortable" },
      { name: "DHCP", level: "Working Knowledge" },
      { name: "ARP", level: "Working Knowledge" },
      { name: "Routing", level: "Working Knowledge" },
      { name: "Ports & Services", level: "Comfortable" },
    ],
  },
  {
    category: "Operating Systems",
    icon: Cpu,
    skills: [
      { name: "Linux", level: "Comfortable" },
      { name: "Windows", level: "Working Knowledge" },
      { name: "Windows Server", level: "Working Knowledge" },
      { name: "Active Directory", level: "Currently Learning" },
    ],
  },
  {
    category: "Programming / Scripting",
    icon: Code2,
    skills: [
      { name: "Python", level: "Working Knowledge" },
      { name: "Bash", level: "Working Knowledge" },
      { name: "SQL", level: "Comfortable" },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  SECURITY TOOLKIT                                                           */
/* -------------------------------------------------------------------------- */

export type ToolGroup = {
  category: string
  icon: LucideIcon
  tools: string[]
}

export const toolGroups: ToolGroup[] = [
  { category: "Web Testing", icon: Globe, tools: ["Burp Suite", "OWASP ZAP", "ffuf"] },
  { category: "Recon", icon: Search, tools: ["Subfinder", "Gobuster", "Amass", "httpx"] },
  { category: "Network Testing", icon: Network, tools: ["Nmap", "Wireshark", "Metasploit"] },
  { category: "Password / Auth", icon: KeyRound, tools: ["Hydra", "John the Ripper", "Hashcat"] },
  { category: "Operating Systems", icon: Terminal, tools: ["Kali Linux", "Parrot OS", "Ubuntu"] },
  { category: "Development / Automation", icon: Code2, tools: ["Python", "Bash", "Git"] },
]

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE / TRAINING                                                      */
/* -------------------------------------------------------------------------- */

export type TimelineItem = {
  title: string
  org: string
  period: string
  type: "Training" | "Education"
  points: string[]
  skills?: string[]
}

export const experience: TimelineItem[] = [
  {
    title: "Vulnerability Analyst & Penetration Testing Trainee",
    org: "DEPI — Digital Egypt Pioneers Initiative",
    period: "[ADD DATES]",
    type: "Training",
    points: [
      "Hands-on training in vulnerability assessment and penetration testing.",
      "Web application and network security fundamentals.",
      "Practical use of industry-standard security tools.",
      "Guided labs simulating real assessment workflows.",
    ],
    skills: ["Burp Suite", "Nmap", "OWASP ZAP", "Web App Testing", "Network Recon", "Vulnerability Assessment"],
  },
]

export const education: TimelineItem[] = [
  {
    title: "Bachelor of Computer Science",
    org: "Faculty of Computers and Artificial Intelligence, Fayoum University",
    period: "Expected 2027",
    type: "Education",
    points: ["Grade: B+", "Focus on practical cybersecurity and software fundamentals."],
    skills: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems", "Databases", "Web Technologies", "Information Security", "Cryptography"],
  },
]

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  name: string
  placeholder?: boolean
  category: string
  problem: string
  built: string
  tech: string[]
  concepts: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: "Web Security Lab",
    placeholder: true,
    category: "Web Application Security",
    problem: "Need a safe, controlled target to practice web exploitation techniques.",
    built: "A deliberately vulnerable web app for practicing common web attacks end to end.",
    tech: ["Node.js", "Express", "SQLite", "Docker"],
    concepts: ["SQL Injection", "XSS", "IDOR", "AuthN", "AuthZ"],
    github: "#",
    demo: "#",
  },
  {
    name: "API Security Lab",
    placeholder: true,
    category: "API Security",
    problem: "APIs frequently ship with broken access control and weak auth.",
    built: "A test API exposing intentional flaws to practice token and access-control testing.",
    tech: ["Python", "FastAPI", "JWT", "Docker"],
    concepts: ["JWT", "Broken Access Control", "Authentication", "Parameter manipulation"],
    github: "#",
  },
  {
    name: "Recon Automation",
    placeholder: true,
    category: "Reconnaissance",
    problem: "Manual recon is slow and inconsistent across targets.",
    built: "A scripted pipeline chaining recon tools into a single repeatable workflow.",
    tech: ["Python", "Bash", "Subfinder", "httpx"],
    concepts: ["Subdomain enumeration", "DNS enumeration", "HTTP probing", "Asset collection"],
    github: "#",
  },
  {
    name: "Active Directory Lab",
    placeholder: true,
    category: "Active Directory",
    problem: "AD attack concepts are hard to learn without a safe environment.",
    built: "A home lab modeling a small Windows domain to study enumeration concepts.",
    tech: ["Windows Server", "PowerShell", "BloodHound"],
    concepts: ["LDAP", "Kerberos", "SMB", "Enumeration", "GPOs"],
    github: "#",
  },
]

/* -------------------------------------------------------------------------- */
/*  LABS & CTFs                                                                */
/* -------------------------------------------------------------------------- */

export type Platform = {
  name: string
  href: string
  blurb: string
  skills: string[]
}

export const platforms: Platform[] = [
  {
    name: "TryHackMe",
    href: "https://tryhackme.com/p/XIZ0",
    blurb: "Guided rooms and learning paths across offensive and defensive security.",
    skills: ["Linux", "Web Security", "Networking", "Cryptography", "Windows Security", "Enumeration"],
  },
  {
    name: "Hack The Box",
    href: "https://app.hackthebox.com/users/2439095",
    blurb: "Realistic machines and challenges focused on exploitation and priv-esc.",
    skills: ["Enumeration", "Linux", "Windows", "Privilege Escalation", "Web Security"],
  },
  {
    name: "PortSwigger Web Security Academy",
    href: "https://portswigger.net/web-security",
    blurb: "Structured, hands-on labs covering web vulnerability classes in depth.",
    skills: ["SQL Injection", "Authentication", "Access Control", "XSS", "Path Traversal", "SSRF", "Host Header"],
  },
]

/* -------------------------------------------------------------------------- */
/*  CERTIFICATIONS                                                             */
/* -------------------------------------------------------------------------- */

export type Certification = {
  name: string
  provider: string
  date: string
  description: string
  credentialUrl?: string
  status: "Earned" | "In Progress"
}

export const certifications: Certification[] = [
  {
    name: "eJPT — Junior Penetration Tester",
    provider: "INE / eLearnSecurity",
    date: "[ADD DATE]",
    description: "Entry-level, hands-on penetration testing certification.",
    credentialUrl: "#",
    status: "In Progress",
  },
  {
    name: "Vulnerability Analyst & Penetration Testing",
    provider: "DEPI — Digital Egypt Pioneers Initiative",
    date: "[ADD DATE]",
    description: "Structured training program in vulnerability assessment and pentesting.",
    credentialUrl: "#",
    status: "In Progress",
  },
]

/* -------------------------------------------------------------------------- */
/*  WRITEUPS                                                                   */
/* -------------------------------------------------------------------------- */

export type Writeup = {
  title: string
  vulnerability: string
  target: string
  difficulty: "Easy" | "Medium" | "Hard"
  summary: string
  tools: string[]
  href: string
}

export const writeups: Writeup[] = [
  {
    title: "Extracting Data via Union-Based SQL Injection",
    vulnerability: "SQL Injection",
    target: "Web application",
    difficulty: "Medium",
    summary: "Identifying an injectable parameter and enumerating the database using UNION-based payloads.",
    tools: ["Burp Suite", "sqlmap"],
    href: "#",
  },
  {
    title: "Username Enumeration via Response Differences",
    vulnerability: "Username Enumeration",
    target: "Login flow",
    difficulty: "Easy",
    summary: "Abusing subtle timing and message differences to enumerate valid accounts.",
    tools: ["Burp Suite", "ffuf"],
    href: "#",
  },
  {
    title: "Reading Files Through Path Traversal",
    vulnerability: "Path Traversal",
    target: "File download endpoint",
    difficulty: "Easy",
    summary: "Bypassing weak filters to escape the intended directory and read arbitrary files.",
    tools: ["Burp Suite"],
    href: "#",
  },
  {
    title: "Poisoning Password Reset with the Host Header",
    vulnerability: "Host Header Injection",
    target: "Password reset",
    difficulty: "Medium",
    summary: "Manipulating the Host header to control links generated during account recovery.",
    tools: ["Burp Suite"],
    href: "#",
  },
  {
    title: "Accessing Other Users' Data via IDOR",
    vulnerability: "IDOR",
    target: "REST API",
    difficulty: "Easy",
    summary: "Tampering with object identifiers to access records belonging to other users.",
    tools: ["Burp Suite", "Postman"],
    href: "#",
  },
  {
    title: "Bypassing API Authorization Checks",
    vulnerability: "Broken Access Control",
    target: "REST API",
    difficulty: "Medium",
    summary: "Testing role and object-level authorization to reach privileged API functionality.",
    tools: ["Burp Suite", "Postman"],
    href: "#",
  },
]

/* -------------------------------------------------------------------------- */
/*  METHODOLOGY                                                                */
/* -------------------------------------------------------------------------- */

export const methodology: { step: string; detail: string }[] = [
  { step: "Scope & Reconnaissance", detail: "Confirm authorization, rules of engagement, and in-scope targets." },
  { step: "Asset Discovery", detail: "Map domains, subdomains, hosts, and exposed services." },
  { step: "Enumeration", detail: "Fingerprint technologies, endpoints, and functionality." },
  { step: "Vulnerability Identification", detail: "Spot likely weaknesses across the attack surface." },
  { step: "Manual Testing", detail: "Validate findings by hand to reduce false positives." },
  { step: "Exploitation Validation", detail: "Safely prove impact within the agreed scope." },
  { step: "Impact Analysis", detail: "Assess business risk and realistic exploitation." },
  { step: "Documentation & Reporting", detail: "Record clear, reproducible findings." },
  { step: "Remediation Recommendations", detail: "Provide actionable, prioritized fixes." },
  { step: "Retesting", detail: "Verify that remediations resolve the issue." },
]

/* -------------------------------------------------------------------------- */
/*  REPORTING                                                                  */
/* -------------------------------------------------------------------------- */

export const reportSections: string[] = [
  "Executive Summary",
  "Scope",
  "Methodology",
  "Findings",
  "Severity",
  "Technical Description",
  "Proof of Concept",
  "Business Impact",
  "Remediation",
  "References",
  "Retesting",
]

/* -------------------------------------------------------------------------- */
/*  ACHIEVEMENTS                                                               */
/* -------------------------------------------------------------------------- */

export const achievements: { value: string; label: string }[] = [
  { value: "+136", label: "TryHackMe rooms completed" },
  { value: "+20", label: "PortSwigger labs solved" },
  { value: "2", label: "CTFs participated in" },
  { value: "+57", label: "Day learning streak" },
]

/* -------------------------------------------------------------------------- */
/*  BLOG / NOTES                                                               */
/* -------------------------------------------------------------------------- */

export type Note = {
  title: string
  topic: string
  minutes: number
  href: string
}

export const notes: Note[] = [
  { title: "Understanding HTTP Requests", topic: "Web Fundamentals", minutes: 5, href: "#" },
  { title: "Cookies vs Sessions", topic: "Web Security", minutes: 6, href: "#" },
  { title: "Authentication vs Authorization", topic: "Access Control", minutes: 4, href: "#" },
  { title: "JWT Security Essentials", topic: "API Security", minutes: 7, href: "#" },
  { title: "How SQL Injection Really Works", topic: "Vulnerabilities", minutes: 8, href: "#" },
  { title: "Active Directory Enumeration Basics", topic: "AD Security", minutes: 9, href: "#" },
]

export const focusIcon = ShieldCheck
