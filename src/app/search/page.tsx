import { notFound } from 'next/navigation';
import { getClient } from '@/lib/client';
import { GET_RECENT_POSTS } from '@/lib/queries';
import PostGrid from '@/components/PostGrid';
import { Post } from '@/types/wordpress';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = searchParams.q?.trim() || '';

  const { data } = await getClient().query({
    query: GET_RECENT_POSTS,
    variables: { first: 100 }, // Fetch more posts to ensure we get all matches
  });

  if (!data?.posts?.nodes) {
    notFound();
  }

  // Filter posts by title or excerpt (case-insensitive)
  const filteredPosts = data.posts.nodes.filter((post: Post) => {
    if (!searchQuery) return false;
    
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(searchLower);
    const excerptMatch = post.excerpt.toLowerCase().includes(searchLower);
    
    return titleMatch || excerptMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {searchQuery ? `Search results for "${searchQuery}"` : 'Search'}
      </h1>

      {!searchQuery ? (
        <p className="text-gray-600 mb-8 text-center">
          Enter a search term to find posts.
        </p>
      ) : filteredPosts.length === 0 ? (
        <div className="min-h-[40vh] flex flex-col items-center justify-center">
          <p className="text-gray-600 mb-8 text-center max-w-md">
            No posts found matching "{searchQuery}". Try a different search term.
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-8">
            Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} matching "{searchQuery}"
          </p>
          <PostGrid posts={filteredPosts} />
        </>
      )}
    </div>
  );
} 