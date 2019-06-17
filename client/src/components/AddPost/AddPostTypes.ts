import { FormComponentProps } from "antd/lib/form";
import { MutationFn } from "react-apollo";
import { GraphqlPost } from "../../graphql/types";

export type FormValues = {
  title: string;
  artist: string;
  image: { file: { response: string } };
};

export type CreatePostVariables = {
  title: string;
  artist: string;
  image: string;
};

export interface PostFormProps extends FormComponentProps {
  onClose: () => void;
  createPost?: MutationFn<any, CreatePostVariables>;
}

export type CreatePostResult = {
  createPost: GraphqlPost;
};


export interface PostFormState {
  loading: boolean;
}
