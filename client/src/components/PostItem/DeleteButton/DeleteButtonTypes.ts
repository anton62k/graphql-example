import { MutationFn } from "react-apollo";
import { GraphqlPost } from "../../../graphql/types";

export interface DeleteItemProps {
  id: string;
  deletePost?: MutationFn<any, Variables>;
}

export type Variables = {
  id: string;
};

export type DeletePostResult = {
  deletePost: GraphqlPost;
};

export const prepareDeletePost = (id: string) => ({
  variables: { id },
  optimisticResponse: {
    __typename: "Mutation",
    deletePost: {
      id,
      __typename: "Post"
    }
  }
});
