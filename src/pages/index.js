import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="cute panda"
        src="../images/panda.jpg"
      />
    </Layout>
  )
}
export default IndexPage