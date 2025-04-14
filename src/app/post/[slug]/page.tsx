import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import Tailwind from 'tailwindcss';

const PostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://your-wordpress-site.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `{
              postBy(uri: "${slug}") {
                title
                content
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                postMetadata {
                  region
                  source_url
                }
                author {
                  node {
                    name
                    url
                  }
                }
              }
            }`,
          }),
        });
        const data = await response.json();
        setPost(data.data.postBy);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post.</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      {post.featuredImage && (
        <img src={post.featuredImage.node.sourceUrl} alt={post.title} className="w-full mb-4" />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="mb-4" />
      {post.postMetadata && (
        <p className="text-gray-600 mb-4">Region: {post.postMetadata.region}</p>
      )}
      {post.postMetadata && post.postMetadata.source_url && (
        <a href={post.postMetadata.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Source
        </a>
      )}
    </div>
  );
};

export default PostPage;
