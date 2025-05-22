/*
  Warnings:

  - A unique constraint covering the columns `[userId,owner,name]` on the table `Repository` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Repository_userId_owner_name_key" ON "Repository"("userId", "owner", "name");
