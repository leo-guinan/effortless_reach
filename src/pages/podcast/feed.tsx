import Layout from "../../core/layouts/Layout"
import Feed from "../../podcast/components/Feed"

const FeedPage = () => {
  return (
    <>
      <Feed />
    </>
  )
}

FeedPage.authenticate = true
FeedPage.getLayout = (page) => <Layout title={"Feed"}>{page}</Layout>
export default FeedPage
