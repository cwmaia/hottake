export default function AboutPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          About Hottake
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hottake is a platform for discovering and sharing the most relevant and engaging
          content from around the world.
        </p>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              Our mission is to connect people with the content that matters most to them,
              no matter where it comes from. We believe in the power of diverse perspectives
              and aim to surface relevant content from all corners of the globe.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">How It Works</h2>
            <p className="mt-2 text-muted-foreground">
              Hottake aggregates content from various sources and categorizes it by region
              and topic. Our platform uses a combination of human curation and technology
              to ensure you're seeing the most relevant and engaging content.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2 text-muted-foreground">
              Have questions or feedback? We'd love to hear from you!
              Reach out to us at contact@hottake.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 