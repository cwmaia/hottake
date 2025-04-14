import { gql } from '@apollo/client';

export const GET_RECENT_POSTS = gql`
  query GetRecentPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        excerpt
        date
        slug
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        regions {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_POSTS_BY_REGION = gql`
  query GetPostsByRegion($slug: String!, $first: Int = 10, $after: String) {
    region(id: $slug, idType: SLUG) {
      name
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          excerpt
          date
          slug
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REGIONS = gql`
  query GetRegions {
    regions(first: 100) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      uri
      postMetadata {
        source_name
        source_url
        region
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`; 