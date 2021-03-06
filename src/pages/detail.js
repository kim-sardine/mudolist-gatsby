import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ pageContext }) => {
  const { 
    title,
    playlist_id,
    thumbnail_url,
  } = pageContext;

  const seoTitle = `무도리스트 - ${title}`;
  return (
    <Layout>
      <SEO title={seoTitle} />
      <h1>{title}</h1>
      <p>{playlist_id}</p>
      <p>{thumbnail_url}</p>
      <p>Now go build something great.</p>
      <img src={thumbnail_url} alt="wow" />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
