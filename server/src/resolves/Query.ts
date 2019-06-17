import { Prisma } from "../generated/prisma-client";

export const Query = {
  post: (root, args, ctx) => (ctx.prisma as Prisma).post({ id: args.id }),
  posts: (root, args, ctx) => (ctx.prisma as Prisma).posts(),
  comments: (root, args, ctx) => (ctx.prisma as Prisma).comments()
};
