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
        <GatsbyImage image={data.facility.mainImage.asset.gatsbyImageData} alt={data.facility.mainImage.asset.altText}/>
        </div>
        <div className="w-5/6 lg:w-1/2  text-center mx-auto my-8 text-xl md:text-4xl">    
                <p className="leading-relaxed">{data.facility.article[0]}</p>
                <p className="leading-relaxed">{data.facility.article[1]}</p>
                <p className="leading-relaxed">{data.facility.article[2]}</p>
                <p className="leading-relaxed">{data.facility.article[3]}</p>
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage2.asset.gatsbyImageData}  alt={data.facility.mainImage2.asset.altText}/>
      </div>
      
       <div className="w-5/6 lg:w-1/2 text-center mx-auto  my-8 text-xl md:text-4xl">    
  
          <p className="leading-relaxed">{data.facility.article2[0]}</p>
          <p className="leading-relaxed">{data.facility.article2[1]}</p>
          <p className="leading-relaxed">{data.facility.article2[2]}</p>
          <p className="leading-relaxed">{data.facility.article2[3]}</p>
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage3.asset.gatsbyImageData}  alt={data.facility.mainImage3.asset.altText}/>
      </div>
      <div className="w-5/6 lg:w-1/2  text-center mx-auto my-8 text-xl md:text-4xl">    
  
        <p className="leading-relaxed">{data.facility.article3[0]}</p>
        <p className="leading-relaxed">{data.facility.article3[1]}</p>
        <p className="leading-relaxed">{data.facility.article3[2]}</p>
        <p className="leading-relaxed">{data.facility.article3[3]}</p>
      </div> 
      <div className="m-auto text-center">
        <GatsbyImage image={data.facility.mainImage4.asset.gatsbyImageData}  alt={data.facility.mainImage4.asset.altText}/>
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
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    article
    mainImage2 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    article2
    mainImage3 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    article3
    mainImage4 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
    
  }
}
`