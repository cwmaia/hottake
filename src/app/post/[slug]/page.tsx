import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getClient } from '@/lib/client';
import { GET_POST_BY_SLUG } from '@/lib/queries';
import { Post } from '@/types/wordpress';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { data } = await getClient().query({
    query: GET_POST_BY_SLUG,
    variables: { slug: params.slug },
  });

  if (!data?.post) {
    notFound();
  }

  const post = data.post as Post;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={post.featuredImage?.node?.sourceUrl || 'http://hottake.local/wp-content/uploads/placeholder.png'}
            alt={post.featuredImage?.node?.altText || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              {post.postMetadata.region}
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
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

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
} 