import {gql} from '@apollo/client';
export const GET_BLOGS = gql`
query GetPostsEdges {
  posts {
    edges {
      node {
        id
        title
        date
        content
        featuredImage{
          node{
            id
            sourceUrl
          }
        }
        tags{
          edges{
            node{
              id
              name
            }
          }
        }
      }
    }
  }
}
`;
export const GET_ALBUMS = gql`
query GetPostsEdges($albumsInput: String) {
  posts(where: {search: $albumsInput}) {
    edges {
      node {
        id
        title
        date
        content
        featuredImage{
          node{
            id
            sourceUrl
          }
        }
        tags{
          edges{
            node{
              id
              name
            }
          }
        }
      }
    }
  }
}
`;

export const GET_TAGS = gql`
query GetPostsEdges($tags: String) {
  posts(where: {tag: $tags}) {
    edges {
      node {
        id
        title
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
        featuredImage{
          node{
            id
            sourceUrl
          }
        }
      }
    }
  }
}
`;