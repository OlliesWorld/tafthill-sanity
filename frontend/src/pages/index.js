import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {PortableText} from '@portabletext/react'


const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-5xl text-white">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      normal: ({children}) => <p className="text-2xl text-green ">{children}</p>,
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  }



const IndexPage = ({data}) => (
 
  <Layout>
     <Seo title="Home" />
     <div className="text-center h-full  m-auto mb-8">
        <p className="w-full lg:w-1/2 bg-tan text-2xl font-light p-6 m-auto">{data.home.title}</p>
        <div className="w-full lg:w-3/5 m-auto text-center">
          <GatsbyImage image={data.home.mainImage.asset.gatsbyImageData} alt={data.home.mainImage.asset.altText} className="z-10 object-cover w-full lg:w-5/6 m-auto"/>
          <div className="w-full lg:w-5/6 my-12  m-auto  lg:flex justify-center">
          <p className="w-full lg:w-1/4 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-darktan/50 pr-8">{data.home.blurb}</p>
          <p className="w-full lg:w-1/4 text-center mt-2  lg:pl-12 ">{data.home.blurb2}</p>
          </div>
        </div>
      <section className="w-full bg-tan mx-auto py-8 lg:p-8">
        <div className="w-full lg:w-2/3 m-auto">
          <h3 className="text-black  text-2xl">{data.home.subtitle2}</h3>
          <h2 className="text-black text-5xl text-center mb-12">{data.home.title2}</h2>
          
          <div className="lg:flex justify-center lg:text-left">
          <div className="w-full mb-12 lg:w-1/2 p-4 lg:border-r-2"><PortableText  value={data.home._rawBody} components={components} /></div>
          <div className="w-full lg:w-1/2 lg:py-4 p-4 lg:pl-8"> <PortableText  value={data.home._rawBody2} components={components} /></div>
          </div>
        </div>
      </section>
      <section className="w-2/3 m-auto mt-24 masonry sm:masonry-sm md:masonry-md">
        <div className="mt-8">
          <Link className="w-3/4 bg-tan text-darktan mt-24 p-4 lg:text-2xl font-extrabold" to={data.home.buttoninternalLink}>{data.home.button}</Link>
        </div>
        <div className="">
          <GatsbyImage class="mt-8 mb-4 lg:mb-0" image={data.home.mason.asset.gatsbyImageData} alt={data.home.mainImage.asset.altText}  />
        </div>
        <GatsbyImage className="mb-4" image={data.home.mason2.asset.gatsbyImageData} alt={data.home.mason2.asset.altText} />
          
        <GatsbyImage className="mb-4 lg:mb-0" image={data.home.mason4.asset.gatsbyImageData} alt={data.home.mason4.asset.altText} />
        <GatsbyImage image={data.home.mason3.asset.gatsbyImageData} alt={data.home.mason3.asset.altText} className="mb-8 lg:mt-8"/>
        <Link className="w-3/4 bg-tan text-darktan mt-12 p-4 lg:text-2xl font-extrabold" to={data.home.button2internalLink}>{data.home.button2}</Link>
      
      </section>
   </div>
  </Layout>
)


export default IndexPage
export const query = graphql`
  query HomeQuery {
    home: sanityHome(_type: {eq: "home"}) {
    title
    subtitle
    blurb
    blurb2
    subtitle2
    title2
   _rawBody
   _rawBody2
   mason{
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
   mason2{
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
   mason3{
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
   mason4{
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
   button
   button2
   buttoninternalLink
   button2internalLink
    mainImage {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
  }
}
`