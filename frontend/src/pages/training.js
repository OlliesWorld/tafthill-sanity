import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const TrainingPage = ({data }) => {

return (
 
  <Layout>
     <Seo title="Training" />
     <div className="w-5/6 lg:w-1/2 bg-tan m-auto p-8 mb-8">
        <h3 className="text-darktan  text-2xl">{data.training.subtitle}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.training.title}</h2>
      </div>
     <div className="m-auto text-center">
        <GatsbyImage image={data.training.mainImage.asset.gatsbyImageData} alt="about image"/>
        </div>
        <div className="w-3/4 text-tan text-center m-auto p-8 mb-8 text-2xl ">    
                <p>{data.training.article1}</p>
      </div> 
      <div className="w-5/6 lg:w-1/2 bg-tan m-auto p-8 mb-8">
        <h3 className="text-darktan  text-2xl">{data.training.subtitle2}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.training.title2}</h2>
      </div>
      <div className="m-auto text-center">
        <GatsbyImage image={data.training.mainImage2.asset.gatsbyImageData} alt="about image"/>
      </div>
      
       <div className="w-3/4  text-tan text-center m-auto p-8 mb-8 text-2xl">    
       <p>{data.training.article2}</p>
        
      </div> 
      <div className="m-auto text-center">
        <a href="https://www.wildrosemagic.org/" target="_blank" rel="noreferrer"  ><GatsbyImage className="hover:bg-tan/10" image={data.training.logo.asset.gatsbyImageData} alt="about image"/></a>
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
    article1
    article2
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