import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const ThanksPage = ({data}) => (
    <Layout>
     <Seo title="Home" />
     <div className="m-auto text-center">
        <GatsbyImage image={data.thanks.mainImage.asset.gatsbyImageData} alt={data.sanityHome.mainImage.asset.filename} />
        </div>
      <div className="w-5/6 lg:w-1/2 bg-tan mx-auto mb-28 p-8">
        <h2 className="text-green text-5xl text-center mb-4">{data.thanks.title}</h2>
        <h3 className="text-darktan text-2xl">{data.thanks.subtitle}</h3>
       
      </div>
  </Layout>
)


export default ThanksPage
export const query = graphql`
  query HomeQuery {
    thanks: sanityThankyou {
    id
    subtitle
    title
    mainImage {
      asset {
        gatsbyImage(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
  }
}
`