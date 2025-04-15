export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Hottake",
  description:
    "Regional news curated by AI. Trending stories from around the region, in real-time.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Regions",
      href: "/regions",
    },
  ],
  links: {
    twitter: "https://twitter.com/hottake",
    github: "https://github.com/hottake",
  },
}
