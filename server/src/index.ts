import { prisma } from "./generated/prisma-client";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolves/";

const server: GraphQLServer = new GraphQLServer({
  typeDefs: "./src/server.graphql",
  resolvers,
  context: params => ({ ...params, prisma })
});
server.start(() => console.log("Server running on localhost:4000"));
