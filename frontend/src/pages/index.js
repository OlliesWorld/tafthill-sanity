import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const IndexPage = ({data}) => (
 
  <Layout>
     <Seo title="Home" />
     <div className="m-auto text-center">
        <GatsbyImage image={data.sanityHome.mainImage.asset.gatsbyImageData} alt={data.sanityHome.mainImage.asset.filename}/>
        </div>
      <div className="w-5/6 lg:w-1/2 bg-tan mx-auto mb-28 p-8">
        <h3 className="text-darktan text-2xl">{data.sanityHome.subtitle}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.sanityHome.title}</h2>
        <p className="text-green text-2xl">{data.sanityHome.body}</p> 
      </div>
  </Layout>
)


export default IndexPage
export const query = graphql`
  query HomeQuery {
    sanityHome(_type: {eq: "home"}) {
    title
    subtitle
    body 
    mainImage {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
  }
}
`