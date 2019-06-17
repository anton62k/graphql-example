import { gql } from "apollo-boost";

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $artist: String!, $image: String!) {
    createPost(title: $title, artist: $artist, image: $image) {
      id
      title
      artist
      image
      createdAt
      comments {
        id
        text
        createdAt
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: String!) {
    deletePost(id: $id) {
      id
      title
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($text: String!, $postId: String!) {
    createComment(text: $text, postId: $postId) {
      id
      text
      createdAt
    }
  }
`;
