import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
  Github,
  Flame,
} from "lucide-react"

export type Icon = typeof LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  gitHub: Github,
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5" />
      <path d="M10 4v10a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0Z" />
      <path d="M1 8h4" />
      <path d="M1 12h4" />
      <path d="M1 16h4" />
      <path d="M19 10h4" />
      <path d="M19 14h4" />
      <path d="M10 7h4" />
      <path d="M10 11h4" />
    </svg>
  ),
  flame: Flame,
}
