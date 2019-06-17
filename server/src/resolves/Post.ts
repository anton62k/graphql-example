import { Prisma } from "../generated/prisma-client";

export const Post = {
  id: parent => parent.id,
  title: parent => parent.title,
  artist: parent => parent.artist,
  image: parent => parent.image,
  createdAt: parent => parent.createdAt,
  comments: (parent, args, ctx) =>
    (ctx.prisma as Prisma)
      .post({ id: parent.id })
      .comments({ orderBy: "createdAt_DESC" })
};
