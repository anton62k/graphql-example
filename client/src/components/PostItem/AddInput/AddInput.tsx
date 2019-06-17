import React, { ChangeEvent, Component } from "react";
import { graphql } from "react-apollo";
import { CREATE_COMMENT } from "../../../graphql/mutations";
import { InputProps } from "./AddInputTypes";
import { Input } from "antd";
import { updateGetPost } from "../../../graphql/updateCache";

const MAX_LENGTH: number = 64;

type AddInputState = {
  text: string;
};

class AddInputInternal extends Component<InputProps, AddInputState> {
  state = { text: "" };

  public render(): React.ReactNode {
    const { text } = this.state;
    return (
      <Input
        allowClear
        onChange={this.onChange}
        value={text}
        onPressEnter={this.onPressEnter}
      />
    );
  }

  private onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value;
    this.setText(text.substr(0, MAX_LENGTH));
  };

  private setText(text: string): void {
    this.setState({ text });
  }

  private onPressEnter = () => {
    const { text } = this.state;
    const { postId, createComment } = this.props;
    if (text && createComment) {
      createComment({
        variables: {
          postId,
          text
        }
      });
      this.setText("");
    }
  };
}

const withCreateComment = graphql<InputProps>(CREATE_COMMENT, {
  name: "createComment",
  options: ({ postId }) => ({
    update: updateGetPost(postId)
  })
});

export const AddInput = withCreateComment(AddInputInternal);
