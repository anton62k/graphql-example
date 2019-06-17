import { ChildDataProps } from "react-apollo";
import { GraphqlPost } from "../../graphql/types";

export type GetPostResponse = {
  post: GraphqlPost;
};

export type InputProps = {
  id: string;
};

export type Variables = {
  id: string;
};

export type ChildProps = ChildDataProps<InputProps, GetPostResponse, Variables>;
