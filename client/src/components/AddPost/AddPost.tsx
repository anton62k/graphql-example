import React, { Component } from "react";
import { Form, Icon, Input, Modal, Upload } from "antd";
import { CREATE_POST } from "../../graphql/mutations";
import { graphql } from "react-apollo";
import { updateCreatePost } from "../../graphql/updateCache";
import { getUploadPath } from "../../utils/getPaths";
import { FormValues, PostFormProps, PostFormState } from "./AddPostTypes";

const textRules = [{ required: true }, { min: 1 }, { max: 32 }];

class PostForm extends Component<PostFormProps, PostFormState> {
  state = { loading: false };

  public render(): React.ReactNode {
    const { loading } = this.state;
    return (
      <Modal
        title="Create post"
        visible
        okText="Create post"
        onOk={this.handleOk}
        okButtonProps={{
          loading
        }}
        onCancel={this.handleCancel}
      >
        {this.renderForm()}
      </Modal>
    );
  }

  private renderForm(): React.ReactNode {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="vertical">
        <Form.Item label="Title">
          {getFieldDecorator("title", {
            rules: textRules
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Artist">
          {getFieldDecorator("artist", {
            rules: textRules
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("image", {
            rules: [{ required: true }]
          })(
            <Upload.Dragger
              accept="image/*"
              name="files"
              action={getUploadPath()}
              fileList={this.getFileList()}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">Support for a single upload.</p>
            </Upload.Dragger>
          )}
        </Form.Item>
      </Form>
    );
  }

  private getFileList() {
    const { getFieldValue } = this.props.form;
    const field = getFieldValue("image");
    return (field && field.fileList.slice(-1)) || [];
  }

  private handleOk = () => {
    this.props.form.validateFields(this.onValidateProps);
  };

  private onValidateProps = async (err: any, values: FormValues) => {
    if (!err && this.props.createPost) {
      const {
        artist,
        title,
        image: {
          file: { response }
        }
      } = values;

      this.setState({ loading: true });

      await this.props.createPost({
        variables: {
          artist,
          title,
          image: response
        }
      });
      this.close();
    }
  };

  private handleCancel = () => {
    this.close();
  };

  private close(): void {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

const MutablePostForm = graphql<PostFormProps>(CREATE_POST, {
  name: "createPost",
  options: {
    update: updateCreatePost
  }
})(PostForm);

export const AddPost = Form.create<PostFormProps>()(MutablePostForm);
