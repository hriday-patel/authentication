import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const hriday = new PrismaBetterSqlite3({
  url: "file:./prisma/app.db",
});

const prisma = new PrismaClient({ adapter: hriday });

export async function getEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}



export async function storeData(
  name: string,
  email: string,
  password: string,
  salt: string
) {
  const newUser = await prisma.user.create({
    data: { name, email, password, salt },
  });
  return newUser;
}
