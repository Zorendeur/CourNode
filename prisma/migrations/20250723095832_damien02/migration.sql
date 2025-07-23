/*
  Warnings:

  - You are about to drop the `userscustom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."userscustom";

-- CreateTable
CREATE TABLE "public"."mallaury" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mallaury_pkey" PRIMARY KEY ("id")
);
