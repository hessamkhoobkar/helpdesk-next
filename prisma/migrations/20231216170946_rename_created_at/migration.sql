/*
  Warnings:

  - You are about to drop the column `since` on the `user` table. All the data in the column will be lost.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `since`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `gender` VARCHAR(255) NOT NULL,
    MODIFY `first_name` VARCHAR(255) NOT NULL,
    MODIFY `last_name` VARCHAR(255) NOT NULL,
    MODIFY `user_name` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `phone` VARCHAR(255) NOT NULL,
    MODIFY `city` VARCHAR(255) NOT NULL,
    MODIFY `state` VARCHAR(255) NOT NULL,
    MODIFY `country` VARCHAR(255) NOT NULL,
    MODIFY `zipCode` VARCHAR(255) NOT NULL;
