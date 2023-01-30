import Layout from "../../core/layouts/Layout"
import Feed from "../../podcast/components/Feed"
import { Suspense } from "react"

const FeedPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Feed />
      </Suspense>
    </>
  )
}

FeedPage.authenticate = true
FeedPage.getLayout = (page) => <Layout title={"Feed"}>{page}</Layout>
export default FeedPage
