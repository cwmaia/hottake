import React, { useState, useEffect } from 'react';
import PostGrid from '../../components/PostGrid';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://your-wordpress-site.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `{
              posts {
                nodes {
                  title
                  excerpt
                  slug
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                  author {
                    node {
                      name
                      url
                    }
                  }
                }
              }
            }`,
          }),
        });
        const data = await response.json();
        const formattedPosts = data.data.posts.nodes.map((post: any) => ({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          date: post.date,
          image: post.featuredImage?.node.sourceUrl || '/images/placeholder.png',
          region: post.categories.nodes[0]?.name || 'General',
          sourceName: post.author.node.name,
          sourceUrl: post.author.node.url,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  return <PostGrid posts={posts} />;
};

export default HomePage;
