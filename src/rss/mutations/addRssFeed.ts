import { Ctx } from "blitz"
import db from "db"

interface AddRssFeedInput {
  feed: string
}

export default async function addRssFeed({ feed }: AddRssFeedInput, { session }: Ctx) {
  if (!session.userId) return null

  const user = await db.user.findFirst({
      where: { id: session.userId },
  });
  if (!user) return null;

  const podcastLookupUrl = process.env.API_URL + "/api/effortless_reach/parse/"
  const results = await fetch(
    podcastLookupUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        url: feed,
        email: user.email,
      })
    })

  const { feed_id, client_account_id } = await results.json()


  const rssFeed = await db.podcast.create({
    data: {
      rss: feed,
      userId: user.id,
      feedId: feed_id,
    },
  })

  await db.user.update({
    where: { id: user.id },
    data: {
      clientAccountId: client_account_id,
    }
  });
  return rssFeed
}
