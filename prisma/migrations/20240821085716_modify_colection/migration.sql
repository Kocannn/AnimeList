/*
  Warnings:

  - You are about to drop the column `email` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[anime_mal_id,user_email]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_email` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Collection_anime_mal_id_email_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` DROP COLUMN `email`,
    ADD COLUMN `anime_image` VARCHAR(191) NULL,
    ADD COLUMN `anime_title` VARCHAR(191) NULL,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Collection_anime_mal_id_user_email_key` ON `Collection`(`anime_mal_id`, `user_email`);
