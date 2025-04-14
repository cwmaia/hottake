import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
  region?: string;
  sourceName?: string;
  sourceUrl?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  slug,
  date,
  image = '/images/placeholder.png',
  region,
  sourceName,
  sourceUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        {region && (
          <span className="inline-block bg-blue-500 text-white text-xs px-2 rounded-full mb-2">
            {region}
          </span>
        )}
        <h2 className="text-xl font-bold mb-2">
          <Link href={`/post/${slug}`} className="text-blue-600 hover:underline">
            {title}
          </Link>
        </h2>
        <div
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        {sourceName && sourceUrl && (
          <a href={sourceUrl} className="text-blue-500 hover:underline text-sm">
            {sourceName}
          </a>
        )}
        <p className="text-gray-500 text-sm mt-2">{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PostCard;
