export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails: {
      width: number;
      height: number;
    };
  };
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface PostMetadata {
  source_name: string;
  source_url: string;
  region: string;
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  uri: string;
  postMetadata: PostMetadata;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface PostsResponse {
  posts: {
    pageInfo: PageInfo;
    nodes: Post[];
  };
}

export interface RegionResponse {
  region: {
    name: string;
    posts: {
      pageInfo: PageInfo;
      nodes: Post[];
    };
  };
}

export interface RegionsResponse {
  regions: {
    nodes: Region[];
  };
} 