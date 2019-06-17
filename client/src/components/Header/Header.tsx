import React, { Component } from "react";
import { Typography, Button } from "antd";
import styles from "./Header.module.css";
import { AddPost } from "../AddPost/AddPost";

const { Title } = Typography;

interface State {
  visibleModal: boolean;
}

export class Header extends Component<{}, State> {
  state = { visibleModal: false };

  public render(): React.ReactNode {
    const { visibleModal } = this.state;
    return (
      <div className={styles.root}>
        <Title level={2}>Artland assigment</Title>
        <Button onClick={this.onAdd}>+ New Post</Button>
        {visibleModal && <AddPost onClose={this.onCloseModal} />}
      </div>
    );
  }

  private onAdd = () => {
    this.setVisible(true);
  };

  private onCloseModal = () => {
    this.setVisible(false);
  };

  private setVisible(value: boolean): void {
    this.setState({ visibleModal: value });
  }
}
