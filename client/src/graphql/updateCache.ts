import { MutationResult } from "react-apollo";
import { CreateCommentResult } from "../components/PostItem/AddInput/AddInputTypes";
import { GET_POST, GET_POSTS } from "./queries";
import { DeletePostResult } from "../components/PostItem/DeleteButton/DeleteButtonTypes";
import { CreatePostResult } from "../components/AddPost/AddPostTypes";

export const updateGetPost = (postId: string) => (
  cache: any,
  mutationResult: MutationResult<CreateCommentResult>
) => {
  if (mutationResult.data) {
    const { post } = cache.readQuery({
      query: GET_POST,
      variables: { id: postId }
    });

    cache.writeQuery({
      query: GET_POST,
      variables: { id: postId },
      data: {
        post: {
          ...post,
          comments: [mutationResult.data.createComment, ...post.comments]
        }
      }
    });
  }
};

export const updateGetPosts = (
  cache: any,
  mutationResult: MutationResult<DeletePostResult>
) => {
  if (mutationResult.data) {
    const id: String = mutationResult.data.deletePost.id;
    const { posts } = cache.readQuery({ query: GET_POSTS });
    cache.writeQuery({
      query: GET_POSTS,
      data: { posts: posts.filter((item: any) => item.id !== id) }
    });
  }
};

export const updateCreatePost = (
  cache: any,
  mutationResult: MutationResult<CreatePostResult>
) => {
  if (mutationResult.data) {
    const post: any = mutationResult.data.createPost;
    const { posts } = cache.readQuery({ query: GET_POSTS });
    cache.writeQuery({
      query: GET_POSTS,
      data: { posts: [...posts, post] }
    });
  }
};
