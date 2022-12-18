import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const AboutPage = ({data}) => {
  const gallery = data.sanityAbout.gallery

return (
 
  <Layout>
     <Seo title="About" />
     <div className="text-center  h-full w-full md:h-3/4 md:w-3/4 m-auto mb-8">
      <div className="m-auto text-center">
        <GatsbyImage image={data.sanityAbout.mainImage.asset.gatsbyImageData} alt="about image"className="object-cover max-h-[32rem] lg:w-3/4 m-auto"/>
        </div>
        <div className="lg:w-3/4 bg-tan mx-auto p-8">
        <h3 className="text-darktan  text-2xl">{data.sanityAbout.subtitle}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.sanityAbout.title}</h2>
        <p className="text-green text-lg md:text-2xl">{data.sanityAbout.article1}</p> 
      </div>
      <div className="lg:w-3/4 bg-tan mx-auto my-8 p-8">
        <h3 className="text-darktan text-2xl">{data.sanityAbout.subtitle2}</h3>
        <h2 className="text-green text-5xl text-center mb-4">{data.sanityAbout.title2}</h2>
        <p className="text-green text-lg md:text-2xl">{data.sanityAbout.article2}</p> 
      </div>
        <div className="w-3/4 m-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {gallery.map((item) => (
                        <div key={item.asset.assetId} >
                          <GatsbyImage  image={item.asset.gatsbyImageData} alt={item.asset.filename}/>
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
    article1
    mainImage {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    title2
    subtitle2
    article2
    gallery {
      asset {
        id
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 500)
      }
    }
  }
}
`