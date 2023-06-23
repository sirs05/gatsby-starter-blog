import * as React from 'react'

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout location={location} title={siteTitle}>
        <main>
        <h1>About Me</h1>
        <p>你好，这是测试施工页面</p>
        </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage