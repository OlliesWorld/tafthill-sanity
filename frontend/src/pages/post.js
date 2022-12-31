import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {PortableText} from '@portabletext/react'


const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl text-white">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  normal: ({children}) => <p className="text-xl">{children}</p>,
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  }

const PostPage = ({data}) => {
  
return (
 
  <Layout>
     <Seo title="About" />
     <div className="text-center  h-full w-full md:h-3/4 md:w-3/4 m-auto mb-8">
      <div className="m-auto text-center">
        <GatsbyImage image={data.sanityPost.mainImage.asset.gatsbyImageData} alt="about image"className="object-cover max-h-[32rem] lg:w-3/4 m-auto"/>
        </div>
        <div className="bg-darktan">
        <h2>{data.sanityPost.title}</h2>

        <PortableText  value={data.sanityPost._rawBody} components={components} /></div>
      </div>
  </Layout>
)
              }

export default PostPage

export const query = graphql`
  query PostQuery {
    sanityPost {
    _rawBody
    title
    id
    _key
    mainImage {
      asset {
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    publishedAt
  }
}
`