/*
  Warnings:

  - You are about to drop the column `ratings` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `ratings`;

-- CreateTable
CREATE TABLE `Rating` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `anime_title` VARCHAR(191) NOT NULL,
    `ratings` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
