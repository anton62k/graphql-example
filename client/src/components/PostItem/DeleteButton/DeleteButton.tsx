import React, { FunctionComponent } from "react";
import { Button } from "antd";
import { graphql } from "react-apollo";
import { DELETE_POST } from "../../../graphql/mutations";
import { updateGetPosts } from "../../../graphql/updateCache";
import { DeleteItemProps, prepareDeletePost } from "./DeleteButtonTypes";

const Item: FunctionComponent<DeleteItemProps> = ({ id, deletePost }) => (
  <Button
    size="small"
    shape="circle"
    icon="close"
    onClick={() => deletePost && deletePost(prepareDeletePost(id))}
  />
);

export const DeleteButton = graphql<DeleteItemProps>(DELETE_POST, {
  name: "deletePost",
  options: {
    update: updateGetPosts
  }
})(Item);
