import * as React from "react"
import queryString from 'query-string'

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list"

import AllPlaylists from "../../content/index.yaml"

function orderPlaylists(playlists, orderBy) {
  console.log(orderBy)
  return playlists
}

const IndexPage = ({location}) => {
  const parsed = location.search ? queryString.parse(location.search) : {}
  const orderBy = parsed.order
  const targetPlaylists = orderPlaylists(AllPlaylists, orderBy)
  return (
    <Layout>
      <SEO title="Home" />
      <div class="py-5">
        <List playlists={targetPlaylists} />
      </div>
      <h1>{location.search}</h1>
      <h1>{orderBy}</h1>
    </Layout>
  )
}

export default IndexPage
