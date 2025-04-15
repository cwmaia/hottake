import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Regional News. Curated by AI.
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-gray-300">
            Hottake brings you trending stories from around the region, in real-time.
          </p>
          <Link
            href="/regions"
            className={buttonVariants({
              size: "lg",
              className: "px-8 text-lg"
            })}
          >
            Explore Posts
          </Link>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            🔥 Trending Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="group flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="p-1">
                  <div className="aspect-video w-full bg-muted rounded-t-lg"></div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Trending Story Title</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    This is where trending story content will appear. Content will be loaded dynamically.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">Region</span>
                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
