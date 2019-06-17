export type GraphqlComment = {
  id: string;
  text: string;
  createdAt: string;
};

export type GraphqlPost = {
  id: string;
  title: string;
  artist: string;
  image: string;
  comments: GraphqlComment[];
};
