/*
  Warnings:

  - You are about to drop the `PendingUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PendingUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TemporaryUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verificationKey" TEXT NOT NULL,
    "codeExpiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "TemporaryUser_email_key" ON "TemporaryUser"("email");

-- CreateIndex
CREATE INDEX "TemporaryUser_email_idx" ON "TemporaryUser"("email");

-- CreateIndex
CREATE INDEX "TemporaryUser_verificationKey_idx" ON "TemporaryUser"("verificationKey");
