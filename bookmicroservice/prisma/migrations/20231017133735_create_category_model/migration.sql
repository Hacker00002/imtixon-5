-- CreateTable
CREATE TABLE "category" (
    "id" UUID NOT NULL DEFAULT GEN_RANDOM_UUID(),
    "book_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_book_name_key" ON "category"("book_name");
