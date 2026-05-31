/*
  Warnings:

  - You are about to drop the column `name` on the `PendingUser` table. All the data in the column will be lost.
  - You are about to drop the column `verificationCode` on the `PendingUser` table. All the data in the column will be lost.
  - Added the required column `verificationKey` to the `PendingUser` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PendingUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verificationKey" TEXT NOT NULL,
    "codeExpiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_PendingUser" ("codeExpiresAt", "createdAt", "email", "id", "password") SELECT "codeExpiresAt", "createdAt", "email", "id", "password" FROM "PendingUser";
DROP TABLE "PendingUser";
ALTER TABLE "new_PendingUser" RENAME TO "PendingUser";
CREATE UNIQUE INDEX "PendingUser_email_key" ON "PendingUser"("email");
CREATE INDEX "PendingUser_email_idx" ON "PendingUser"("email");
CREATE INDEX "PendingUser_verificationKey_idx" ON "PendingUser"("verificationKey");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
