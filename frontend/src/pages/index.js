import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const HeroCarousel = ({data})  => { 
const image = data.sanityHome.gallery
  return (
    
   <div className="  h-full w-full md:h-3/4 md:w-3/4 m-auto">
     <AliceCarousel autoPlay autoPlayInterval="3400" infinite animationType="fadeout" animationDuration={800}>
      {image.map((img) => (

            <GatsbyImage image={img.asset.gatsbyImageData} alt={data.sanityHome.mainImage.asset.filename}/>
      ))}
    
   
      </AliceCarousel>
   </div>
    
  )
}



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
       <HeroCarousel />
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
    gallery {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
      }
    }
  }
}
`