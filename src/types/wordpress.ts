export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage: FeaturedImage;
  regions: {
    nodes: Region[];
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface PostsResponse {
  posts: {
    pageInfo: PageInfo;
    edges: Array<{
      node: Post;
    }>;
  };
}

export interface RegionResponse {
  region: {
    id: string;
    name: string;
    slug: string;
    posts: {
      pageInfo: PageInfo;
      edges: Array<{
        node: Post;
      }>;
    };
  };
}

export interface RegionsResponse {
  regions: {
    nodes: Region[];
  };
} 