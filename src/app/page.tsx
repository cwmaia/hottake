import { format } from 'date-fns';
import { is } from 'date-fns/locale';

// Mock data for demonstration
const mockPosts = [
  {
    id: '1',
    title: 'Nýr eldgos á Reykjanesi',
    excerpt: '<p>Eldgos hefur hafist á Reykjanesi í dag. Rannsóknir á staðnum eru í gangi.</p>',
    date: new Date().toISOString(),
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        altText: 'Eldgos á Reykjanesi'
      }
    },
    regions: {
      nodes: [
        { name: 'Reykjanes', slug: 'reykjanes' }
      ]
    }
  },
  {
    id: '2',
    title: 'Nýtt hótel opnar í Reykjavík',
    excerpt: '<p>Lúxushótel með 200 herbergi hefur opnað í miðbæ Reykjavíkur.</p>',
    date: new Date().toISOString(),
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        altText: 'Nýtt hótel í Reykjavík'
      }
    },
    regions: {
      nodes: [
        { name: 'Reykjavík', slug: 'reykjavik' }
      ]
    }
  },
  {
    id: '3',
    title: 'Fiskveiðar í Norðurlandi',
    excerpt: '<p>Árlegar fiskveiðar hafa hafist í Eyjafirði með góðum árangri.</p>',
    date: new Date().toISOString(),
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        altText: 'Fiskveiðar í Norðurlandi'
      }
    },
    regions: {
      nodes: [
        { name: 'Norðurland', slug: 'nordurland' }
      ]
    }
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Fréttir</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.featuredImage?.node?.sourceUrl && (
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h2>
                <div className="text-sm text-gray-500 mb-2">
                  {format(new Date(post.date), 'PPP', { locale: is })}
                </div>
                <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                {post.regions?.nodes?.length > 0 && (
                  <div className="flex gap-2">
                    {post.regions.nodes.map((region) => (
                      <a
                        key={region.slug}
                        href={`/region/${region.slug}`}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {region.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 