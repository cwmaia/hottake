import { gql } from '@apollo/client';

export const GET_RECENT_POSTS = gql`
  query GetRecentPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          excerpt
          date
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          regions {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_POSTS_BY_REGION = gql`
  query GetPostsByRegion($slug: String!, $first: Int!, $after: String) {
    region(id: $slug, idType: SLUG) {
      id
      name
      slug
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            title
            excerpt
            date
            slug
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            regions {
              nodes {
                id
                name
                slug
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
    regions {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`; 