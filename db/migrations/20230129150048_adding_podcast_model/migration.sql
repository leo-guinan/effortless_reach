-- CreateTable
CREATE TABLE "Podcast" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rss" TEXT NOT NULL,
    "feedId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Podcast_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_rss_key" ON "Podcast"("rss");

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_feedId_key" ON "Podcast"("feedId");

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
