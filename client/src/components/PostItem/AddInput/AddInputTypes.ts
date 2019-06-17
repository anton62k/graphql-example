import { MutationFn } from "react-apollo";
import { GraphqlComment } from "../../../graphql/types";

export type InputProps = {
  postId: string;
  createComment?: MutationFn<any, Variables>;
};

export type Variables = {
  postId: string;
  text: string;
};

export type CreateCommentResult = {
  createComment: GraphqlComment;
};
