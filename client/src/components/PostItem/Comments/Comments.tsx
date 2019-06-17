import React, { FunctionComponent } from "react";
import { Typography } from "antd";
import styles from "./Comment.module.css";
import moment from "moment";
import { CommentProps, CommentsProps } from "./CommentsTypes";

const { Text } = Typography;

export const Comments: FunctionComponent<CommentsProps> = ({ comments }) => (
  <div className={styles.comments}>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);

const Comment: FunctionComponent<CommentProps> = ({ comment }) => (
  <div className={styles.comment}>
    <Text>{comment.text}</Text>
    <h6>{moment(comment.createdAt).fromNow()}</h6>
  </div>
);
