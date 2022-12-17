import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, A11y, Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const IndexPage = ({data}) => (
 
  <Layout>
     <Seo title="Home" />
     <div className="text-center  h-full w-full md:h-3/4 md:w-3/4 m-auto">
     <Swiper
      modules={[ Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={5}
      slidesPerView={1}
      autoplay
      effect="fade"
      pagination={{ clickable: true }}
    >
       {data.home.gallery.map((img) => (
        <SwiperSlide key={img.asset.assetId} >
            <GatsbyImage image={img.asset.gatsbyImageData} alt={img.asset.filename} className="object-cover max-h-[32rem] lg:w-3/4 m-auto"/>
            </SwiperSlide>
      ))}
    </Swiper>
    
      <div className="lg:w-3/4 bg-tan mx-auto p-8">
        <h3 className="text-darktan text-2xl">{data.home.subtitle}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.home.title}</h2>
        <p className="text-green text-2xl">{data.home.body}</p> 
      </div>
     
      <div className="m-auto text-center">
       <GatsbyImage image={data.home.mainImage.asset.gatsbyImageData} alt={data.home.mainImage.asset.filename}/>
        </div>
   </div>
  </Layout>
)


export default IndexPage
export const query = graphql`
  query HomeQuery {
    home: sanityHome(_type: {eq: "home"}) {
    title
    subtitle
    body 
    mainImage {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    gallery {
      asset {
        assetId
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
  }
}
`