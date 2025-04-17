/*
  Warnings:

  - You are about to drop the column `account_id` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `receiver_account_id` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_account_id` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "account_id",
ADD COLUMN     "receiver_account_id" UUID NOT NULL,
ADD COLUMN     "sender_account_id" UUID NOT NULL;
