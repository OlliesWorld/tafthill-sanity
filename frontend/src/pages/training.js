import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {PortableText} from '@portabletext/react'


const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className=" text-2xl text-white">{children}</h1>,
      blockquote: ({children}) => <blockquote className="text-green border-l-green">{children}</blockquote>,
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-green ">{children}</h2>
      ),
    },
  }


const TrainingPage = ({data }) => {

return (
 
  <Layout>
     <Seo title="Training" />
     <div className="w-5/6 lg:w-1/2 bg-darktan m-auto p-8 mb-8">
        <h3 className="text-darktan  text-2xl">{data.training.subtitle}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.training.title}</h2>
      </div>
     <div className="m-auto text-center">
        <GatsbyImage image={data.training.mainImage.asset.gatsbyImageData} alt="about image"/>
        </div>
        <div className="w-5/6 lg:w-3/5 text-tan text-center m-auto p-8 mb-8 text-2xl ">    
        <PortableText  value={data.training._rawBody} components={components} />
      </div> 
      <div className="w-5/6 lg:w-1/2 bg-darktan m-auto p-8 mb-8">
        <h3 className="text-darktan  text-2xl">{data.training.subtitle2}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.training.title2}</h2>
      </div>
      <div className="m-auto text-center">
        <GatsbyImage image={data.training.mainImage2.asset.gatsbyImageData} alt="about image"/>
      </div>
      
       <div className="w-5/6 lg:w-3/5 text-tan text-center m-auto p-8 mb-8 text-2xl">    
       <PortableText  value={data.training._rawBody2} components={components} />
        
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage  image={data.training.logo.asset.gatsbyImageData} alt="about image"/>
      </div>
      
  </Layout>
)
              }

export default TrainingPage

export const query = graphql`
  query TrainingQuery {
    training: sanityTraining(_type: {eq: "training"}) {
    title2
    title
    subtitle2
    subtitle
    _rawBody
    _rawBody2
    logo {
      asset {
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 300)
      }
    }
    mainImage {
      asset {
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    mainImage2 {
      asset {
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
  }
}
`