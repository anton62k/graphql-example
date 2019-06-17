import { Prisma } from "../generated/prisma-client";

export const Mutation = {
  createPost: (root, args, ctx, info) =>
    (ctx.prisma as Prisma).createPost({
      title: args.title,
      artist: args.artist,
      image: args.image
    }),
  deletePost: (root, args, ctx, info) =>
    (ctx.prisma as Prisma).deletePost({ id: args.id }),
  createComment: (root, args, ctx, info) =>
    (ctx.prisma as Prisma).createComment({
      text: args.text,
      post: {
        connect: { id: args.postId }
      }
    }),
  deleteComment: (root, args, ctx, info) =>
    (ctx.prisma as Prisma).deleteComment({ id: args.id })
};
