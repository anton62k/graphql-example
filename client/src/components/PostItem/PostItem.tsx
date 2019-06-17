import React, { FunctionComponent } from "react";
import { graphql } from "react-apollo";
import { GET_POST } from "../../graphql/queries";
import { Skeleton } from "antd";
import {
  ChildProps,
  GetPostResponse,
  InputProps,
  Variables
} from "./PostItemTypes";
import styles from "./PostItem.module.css";
import { AddInput } from "./AddInput/AddInput";
import { Comments } from "./Comments/Comments";
import { DeleteButton } from "./DeleteButton/DeleteButton";
import { getImagePath } from "../../utils/getPaths";

const DataState: FunctionComponent<GetPostResponse> = ({ post }) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <div>
        <h3>{post.title}</h3>
        <h5>{post.artist}</h5>
      </div>
      <DeleteButton id={post.id} />
    </div>
    <div className={styles.image}>
      <img alt={post.title} src={getImagePath(post.image)} />
    </div>
    <div className={styles.numberComments}>
      <h3>Comments count {post.comments.length}</h3>
    </div>
    <Comments comments={post.comments} />
    <AddInput postId={post.id} />
  </div>
);

const LoadingState = () => (
  <div className={styles.loading}>
    <Skeleton active={true} paragraph={{ rows: 7 }} />
  </div>
);

const withPost = graphql<InputProps, GetPostResponse, Variables, ChildProps>(
  GET_POST,
  {
    options: ({ id }) => ({
      variables: { id }
    })
  }
);

export const PostItem = withPost(({ data: { loading, post } }) =>
  !post || loading ? <LoadingState /> : <DataState post={post} />
);
