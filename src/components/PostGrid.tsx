import React from 'react';
import PostCard from './PostCard';

interface PostGridProps {
  posts: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    image?: string;
    region?: string;
    sourceName?: string;
    sourceUrl?: string;
  }[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <p className="text-center text-gray-500">No posts available.</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostGrid;
