import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function AdminPage() {
  // Mock data for demonstration
  const stats = [
    { title: "Total Posts", value: "412", icon: "file" },
    { title: "Pending Review", value: "23", icon: "clock" },
    { title: "Users", value: "1,204", icon: "user" },
    { title: "Regions", value: "8", icon: "globe" },
  ]

  const recentSubmissions = [
    { id: 1, title: "New Economic Policy in South Asia", status: "pending", date: "2 hours ago", region: "Asia" },
    { id: 2, title: "Tech Industry Expands in North America", status: "approved", date: "4 hours ago", region: "North America" },
    { id: 3, title: "Environmental Summit in Europe", status: "pending", date: "6 hours ago", region: "Europe" },
    { id: 4, title: "Sports Tournament Results", status: "rejected", date: "8 hours ago", region: "Global" },
    { id: 5, title: "Cultural Festival in South America", status: "pending", date: "10 hours ago", region: "South America" },
  ]

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>Add New Post</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Icons.flame className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Submissions Table */}
      <div className="bg-card border rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Title</th>
                <th className="text-left py-3 px-4 font-medium">Region</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentSubmissions.map((submission) => (
                <tr key={submission.id} className="border-b">
                  <td className="py-3 px-4">{submission.title}</td>
                  <td className="py-3 px-4">{submission.region}</td>
                  <td className="py-3 px-4">
                    <span className={`
                      px-2 py-1 rounded-full text-xs
                      ${submission.status === 'approved' && 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'}
                      ${submission.status === 'pending' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400'}
                      ${submission.status === 'rejected' && 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'}
                    `}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{submission.date}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 