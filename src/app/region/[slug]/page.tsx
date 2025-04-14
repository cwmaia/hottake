import { notFound } from 'next/navigation';
import { getClient } from '@/lib/client';
import { GET_RECENT_POSTS } from '@/lib/queries';
import PostGrid from '@/components/PostGrid';
import { Post } from '@/types/wordpress';

interface RegionPageProps {
  params: {
    slug: string;
  };
}

function formatRegionName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { data } = await getClient().query({
    query: GET_RECENT_POSTS,
    variables: { first: 100 }, // Fetch more posts to ensure we get all for the region
  });

  if (!data?.posts?.nodes) {
    notFound();
  }

  // Filter posts by region (case-insensitive)
  const regionPosts = data.posts.nodes.filter(
    (post: Post) => post.postMetadata.region.toLowerCase() === params.slug.toLowerCase()
  );

  if (regionPosts.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Stories from {formatRegionName(params.slug)}
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          No posts found for this region yet. Check back soon for new stories!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Stories from {formatRegionName(params.slug)}
      </h1>
      <PostGrid posts={regionPosts} />
    </div>
  );
} 