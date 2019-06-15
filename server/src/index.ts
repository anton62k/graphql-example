import { prisma, User } from "./generated/prisma-client";

async function main() {
  const users: User[] = await prisma.users();
  console.log(`Number of users: ${users.length}`);
}

main();
