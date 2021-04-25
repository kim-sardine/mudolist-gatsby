import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Detail from "../components/detail"

const IndexPage = ({ pageContext }) => {
  const { 
    playlist
  } = pageContext;
  if (!playlist) {
    return null;
  }

  const seoTitle = `${playlist.title}`;
  const meta = [{
    name: `og:image`,
    content: playlist.thumbnail_url,
  }]

  return (
    <Layout>
      <SEO title={seoTitle} meta={meta} />
      <Detail playlist={playlist} />
    </Layout>
  )
}

export default IndexPage
