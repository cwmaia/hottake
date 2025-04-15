import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function RegionsPage() {
  // Mock regions data
  const regions = [
    { id: 1, name: "North America", slug: "north-america", postCount: 156 },
    { id: 2, name: "South America", slug: "south-america", postCount: 98 },
    { id: 3, name: "Europe", slug: "europe", postCount: 243 },
    { id: 4, name: "Africa", slug: "africa", postCount: 87 },
    { id: 5, name: "Asia", slug: "asia", postCount: 312 },
    { id: 6, name: "Oceania", slug: "oceania", postCount: 65 },
    { id: 7, name: "Middle East", slug: "middle-east", postCount: 124 },
    { id: 8, name: "Global", slug: "global", postCount: 189 },
  ]

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Explore by Region
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Discover content from different parts of the world. Select a region to see the latest
          trends, news, and stories.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {regions.map((region) => (
          <Link 
            key={region.id} 
            href={`/regions/${region.slug}`}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/50"
          >
            <h2 className="text-xl font-bold transition-colors group-hover:text-primary">
              {region.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {region.postCount} posts
            </p>
            <div className="mt-4 flex justify-end">
              <span className="text-xs text-primary">View region →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 