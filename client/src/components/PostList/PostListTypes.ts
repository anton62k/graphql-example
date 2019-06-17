import { ChildDataProps } from "react-apollo";
import { GraphqlPost } from "../../graphql/types";

export type GetPostsResponse = {
  posts: GraphqlPost[];
};

export type InputProps = {};

export type Variables = {};

export type ChildProps = ChildDataProps<
  InputProps,
  GetPostsResponse,
  Variables
>;
