import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Detail from "../components/detail"

const IndexPage = ({ pageContext }) => {
  const { 
    playlist
  } = pageContext;

  const seoTitle = `${playlist.title}`;
  return (
    <Layout>
      <SEO title={seoTitle} />
      <Detail playlist={playlist} />
    </Layout>
  )
}

export default IndexPage
