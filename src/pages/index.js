import * as React from "react"
import queryString from 'query-string'

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list"
import Category from "../components/category"

import AllPlaylists from "../../content/index.yaml"

import { order } from '../utils';

const IndexPage = ({location}) => {
  const parsed = location.search ? queryString.parse(location.search) : {}
  const orderBy = parsed.order
  const targetPlaylists = order(AllPlaylists, orderBy)
  return (
    <Layout>
      <SEO title="Home" />
      <div class="pt-5">
        <Category orderBy={orderBy} />
      </div>
      <div class="py-5">
        <List playlists={targetPlaylists} />
      </div>
    </Layout>
  )
}

export default IndexPage
