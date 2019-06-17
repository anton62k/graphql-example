import React, { FunctionComponent } from "react";
import { graphql } from "react-apollo";
import { GET_POSTS } from "../../graphql/queries";
import { PostItem } from "../PostItem/PostItem";
import styles from "./PostList.module.css";
import {
  ChildProps,
  GetPostsResponse,
  InputProps,
  Variables
} from "./PostListTypes";
import { Spin } from "antd";

const DataState: FunctionComponent<GetPostsResponse> = ({ posts }) => (
  <div className={styles.root}>
    {posts.map(item => (
      <PostItem key={item.id} id={item.id} />
    ))}
  </div>
);

const LoadingState: FunctionComponent = () => (
  <Spin spinning={true}>
    <div className={styles.loading} />
  </Spin>
);

const withPosts = graphql<InputProps, GetPostsResponse, Variables, ChildProps>(
  GET_POSTS
);

export const PostList = withPosts(({ data: { loading, posts } }) =>
  !posts || loading ? <LoadingState /> : <DataState posts={posts} />
);
