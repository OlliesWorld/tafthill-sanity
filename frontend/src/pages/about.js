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
  normal: ({children}) => <p className="text-white text-left text-2xl">{children}</p>,
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  }

const AboutPage = ({data}) => {
  const gallery = data.sanityAbout.gallery

return (
 
  <Layout>
     <Seo title="About" />
     <div className="text-center  h-full w-full md:h-3/4 md:w-3/4 m-auto mb-8">
      <div className="m-auto text-center">
        <GatsbyImage image={data.sanityAbout.mainImage.asset.gatsbyImageData} alt="about image"className="object-cover max-h-[32rem] lg:w-3/4 m-auto"/>
        </div>
        <div className="lg:w-3/4 bg-darktan mx-auto p-4 lg:p-12">
        <h3 className="text-left text-black font-bold text-2xl">{data.sanityAbout.subtitle}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.sanityAbout.title}</h2>
        <PortableText  value={data.sanityAbout._rawBody} components={components} />
      </div>
      <div className="lg:w-3/4 bg-darktan mx-auto my-8 p-4 lg:p-12">
        <h3 className="text-left text-black font-bold text-2xl">{data.sanityAbout.subtitle2}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.sanityAbout.title2}</h2>
        <PortableText  value={data.sanityAbout._rawBody2} components={components} />
      </div>
        <div className=" lg:columns-3 sm:columns-2 gap-4">
                    {gallery.map((item, index) => (
                        <div className="py-2 px-1 inline-block w-full group"  key={item.asset.id} >
                           
       
                          <GatsbyImage   image={item.asset.gatsbyImageData} alt={item.asset.filename}/>
                      
                        
                        </div>
                    ))}             
        </div>
      </div>
  </Layout>
)
              }

export default AboutPage

export const query = graphql`
  query AboutQuery {
    sanityAbout(_type: {eq: "about"}) {
    title
    subtitle
    _rawBody
    mainImage {
      asset {
        id
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850 )
      }
    }
    title2
    subtitle2
    _rawBody2
    gallery {
      asset {
        id
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 500, height: 400)
      }
    }
  }
}
`