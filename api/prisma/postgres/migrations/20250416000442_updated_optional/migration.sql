-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "updated_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_by" DROP NOT NULL;
