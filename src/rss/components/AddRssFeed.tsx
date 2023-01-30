import { useState } from "react"
import { useMutation } from "@blitzjs/rpc"
import addRssFeed from "../mutations/addRssFeed"
import { useRouter } from "next/router"
import { Routes } from "@blitzjs/next"

const AddRssFeed = () => {
  const [addFeedMigration] = useMutation(addRssFeed)
  const router = useRouter()

  const [rssFeed, setRssFeed] = useState<string>('')
  const handleRssFeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRssFeed(event.target.value)
  }
  const saveRssFeed = async () => {
    await addFeedMigration({feed: rssFeed})
    await router.push(Routes.FeedPage())
  }
  return (
    <div>
      <label htmlFor="addRssFeed" className="block text-sm font-medium text-gray-700">
        Rss Feed
      </label>
      <div className="mt-1">
        <input
          onChange={handleRssFeedChange}
          value={rssFeed}
          type="text"
          name="addRssFeed"
          id="addRssFeed"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://example.com/rss"
        />
        <button onClick={saveRssFeed}>Save RSS Feed</button>
      </div>

    </div>
  )
}

export default AddRssFeed
