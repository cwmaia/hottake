import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SubmitPage() {
  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Submit Content</h1>
        <p className="text-muted-foreground mb-8">
          Have a trending story or news item? Submit it for consideration.
        </p>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter the title of your content" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="url">URL (optional)</Label>
            <Input id="url" type="url" placeholder="https://example.com/article" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="region">Region</Label>
            <select 
              id="region" 
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="">Select a region</option>
              <option value="north-america">North America</option>
              <option value="south-america">South America</option>
              <option value="europe">Europe</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="oceania">Oceania</option>
              <option value="middle-east">Middle East</option>
              <option value="global">Global</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea 
              id="content" 
              placeholder="Enter the content or description"
              rows={6}
            />
          </div>
          
          <Button type="submit" className="w-full">Submit for Review</Button>
        </form>
      </div>
    </div>
  )
} 