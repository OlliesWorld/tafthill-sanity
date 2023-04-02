import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const NotFoundPage = ({data}) => (
  <Layout>
    <div className="text-center">
    <h1>Oh no!</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <GatsbyImage image={data.thanks.mainImage.asset.gatsbyImage} alt={data.thanks.mainImage.asset.altText} />
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
export const query = graphql`
  query HomeQuery {
    thanks: sanityThankyou {

    mainImage {
      asset {
        altText
        filename
        gatsbyImage(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
  }
}
`