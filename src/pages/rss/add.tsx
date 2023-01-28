import Layout from "../../core/layouts/Layout"
import { Suspense } from "react"
import AddRssFeed from "../../rss/components/AddRssFeed"

const AddRssFeedPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Add RSS Feed</h1>
        <AddRssFeed />
      </Suspense>
      This is where you can add your rss feed for your podcast.
    </>
  )
}

AddRssFeedPage.authenticate = true
AddRssFeedPage.getLayout = (page) => <Layout title={"Add RSS Feed"}>{page}</Layout>
export default AddRssFeedPage
