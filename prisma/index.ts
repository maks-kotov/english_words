// import { PrismaClient } from "@/prisma/generated/client";
// import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
// import { withAccelerate } from "@prisma/extension-accelerate";
// const connectionString = `${process.env.DATABASE_URL}`;

// const adapter = new PrismaBetterSqlite3({ url: connectionString });
// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({ adapter }).$extends(withAccelerate());

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/prisma/generated/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
