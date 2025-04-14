import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/wordpress';

interface PostGridProps {
  posts: Post[];
}

// Fallback image for posts without featured images
const FALLBACK_IMAGE = '/images/placeholder.jpg';

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article 
          key={post.uri} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <div className="relative h-48">
            <Image
              src={post.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                {post.postMetadata.region}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              <Link 
                href={post.uri} 
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {post.title}
              </Link>
            </h2>
            <div
              className="text-gray-600 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <div className="flex items-center justify-between text-sm text-gray-500">
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <Link 
                href={post.postMetadata.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {post.postMetadata.source_name}
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 