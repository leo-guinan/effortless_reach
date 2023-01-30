import { api } from "src/blitz-server"
import db from "db"
import { Ctx } from "blitz"

export default api(async (req, res, ctx:Ctx) => {
  ctx.session.$authorize()
  const publicData = ctx.session.$publicData

  if (!publicData.userId) return res.status(404).json({})
  const user = await db.user.findFirst({
    where: { id: publicData.userId },
    include: {
      podcasts: true
    }
  });
  if (!user || !user.podcasts || !user.podcasts[0]) return res.status(404).json({});

  const feedId = user.podcasts[0].feedId

  const podcastLookupUrl = process.env.API_URL + "/api/effortless_reach/get_episodes/"
  const results = await fetch(
    podcastLookupUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        feed_id: feedId,
        client_account_id: user.clientAccountId,
      })
    })

  const data = await results.json()
  console.log(data)
  const transformed = data.episodes.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      description: episode.description,
      link: episode.link,
      publishedDate: episode.published_at,
      tags: [
        {
          name: "Transcript",
          status: episode.transcript_status,
        }
      ]
    }
  });


  res.status(200).json(transformed)
})
