-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TemporaryUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "verificationCode" TEXT NOT NULL,
    "codeExpiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_TemporaryUser" ("codeExpiresAt", "createdAt", "email", "id", "password", "verificationCode") SELECT "codeExpiresAt", "createdAt", "email", "id", "password", "verificationCode" FROM "TemporaryUser";
DROP TABLE "TemporaryUser";
ALTER TABLE "new_TemporaryUser" RENAME TO "TemporaryUser";
CREATE UNIQUE INDEX "TemporaryUser_email_key" ON "TemporaryUser"("email");
CREATE INDEX "TemporaryUser_email_idx" ON "TemporaryUser"("email");
CREATE INDEX "TemporaryUser_verificationCode_idx" ON "TemporaryUser"("verificationCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
