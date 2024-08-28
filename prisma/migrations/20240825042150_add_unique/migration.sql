/*
  Warnings:

  - A unique constraint covering the columns `[anime_mal_id,user_email]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Rating_anime_mal_id_user_email_key` ON `Rating`(`anime_mal_id`, `user_email`);
