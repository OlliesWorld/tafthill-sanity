import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const FacilityPage = ({data }) => {

return (
 
  <Layout>
     <Seo title="Facility" />
     <h2 className="text-darktan text-5xl text-center mb-8">{data.facility.title}</h2>
     <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage.asset.gatsbyImageData} alt="about image"/>
        </div>
        <div className="w-5/6 lg:w-1/2  text-center m-auto p-8 mb-8 text-lg md:text-4xl">    
                <p>{data.facility.article[0]}</p>
                <p>{data.facility.article[1]}</p>
                <p>{data.facility.article[2]}</p>
                <p>{data.facility.article[3]}</p>
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage2.asset.gatsbyImageData} alt="about image"/>
      </div>
      
       <div className="w-5/6 lg:w-1/2 text-center m-auto p-8 mb-8 text-lg md:text-4xl">    
  
          <p>{data.facility.article2[0]}</p>
          <p>{data.facility.article2[1]}</p>
          <p>{data.facility.article2[2]}</p>
          <p>{data.facility.article2[3]}</p>
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage3.asset.gatsbyImageData} alt="about image"/>
      </div>
      <div className="w-5/6 lg:w-1/2  text-center m-auto p-8 mb-8 text-lg md:text-4xl">    
  
        <p>{data.facility.article3[0]}</p>
        <p>{data.facility.article3[1]}</p>
        <p>{data.facility.article3[2]}</p>
        <p>{data.facility.article3[3]}</p>
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage4.asset.gatsbyImageData} alt="about image"/>
      </div>
  </Layout>
)
              }

export default FacilityPage

export const query = graphql`
  query FacilityQuery {
    facility: sanityFacility(_type: {eq: "facility"}) {
    title
    mainImage {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    article
    mainImage2 {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    article2
    mainImage3 {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    article3
    mainImage4 {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    
  }
}
`