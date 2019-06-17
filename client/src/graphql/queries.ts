import { gql } from "apollo-boost";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: String!) {
    post(id: $id) {
      id
      title
      artist
      image
      comments {
        id
        text
        createdAt
      }
    }
  }
`;

