/*
  Warnings:

  - You are about to drop the column `rating` on the `collection` table. All the data in the column will be lost.
  - Added the required column `ratings` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `rating`,
    ADD COLUMN `ratings` INTEGER NOT NULL;
