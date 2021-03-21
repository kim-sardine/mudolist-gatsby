import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <h1 className="mt-4">존재하지 않는 페이지입니다.</h1>
  </Layout>
)

export default NotFoundPage
