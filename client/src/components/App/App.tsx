import React, { FunctionComponent } from "react";
import styles from "./App.module.css";
import { Header } from "../Header/Header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { PostList } from "../PostList/PostList";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

export const App: FunctionComponent = () => (
  <ApolloProvider client={client}>
    <div className={styles.root}>
      <Header />
      <PostList />
    </div>
  </ApolloProvider>
);
