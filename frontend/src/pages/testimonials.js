import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const TestimonialsPage = ({data}) => {

return (
 
  <Layout>
     <Seo title="Testimonials" />
        <div className="w-3/4 m-auto  gap-8 mb-12 text-xl">
            {data.testimonials.quote && <div className="lg:flex mb-12 ">
              <GatsbyImage image={data.testimonials.image1.asset.gatsbyImageData} alt={data.testimonials.image1.asset.filename} className="h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p>" {data.testimonials.quote} "</p>
                <p className="font-bold text-darktan text-center mt-8">~ {data.testimonials.name} ~</p>
              </div>
              </div>}

            {data.testimonials.quote2 && <div className="lg:flex mb-12 ">
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >" {data.testimonials.quote2} "</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name2} ~</p>
                </div>
                <GatsbyImage image={data.testimonials.image2.asset.gatsbyImageData} alt={data.testimonials.image2.asset.filename} className="lg:h-96  lg:ml-4"/>
             
              </div>}
            {data.testimonials.quote3 && <div className="lg:flex mb-12 ">
            <GatsbyImage image={data.testimonials.image3.asset.gatsbyImageData} alt={data.testimonials.image3.asset.filename} className="lg:h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >"{data.testimonials.quote3}"</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name3}~</p>
              </div>
              </div>}
            {data.testimonials.quote4 &&<div  className="lg:flex mb-12 "> 
            <div className="lg:w-2/3 bg-tan my-auto p-8">
              <p >"{data.testimonials.quote4}"</p>
              <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name4}~</p>
            </div>
            <GatsbyImage image={data.testimonials.image4.asset.gatsbyImageData} alt={data.testimonials.image4.asset.filename} className="lg:h-96  lg:ml-4"/>
            </div>}
           
            {/* {data.testimonials.quote6 &&<div className="bg-darktan/30 p-4 text-white/80 my-auto"><p >"{data.testimonials.quote6}"</p><p className="text-center mt-12"> ~{data.testimonials.name6}~</p></div>}
            {data.testimonials.quote5 &&<div className="bg-darktan/30 p-4 text-white/80 my-auto"><p >"{data.testimonials.quote5}"</p><p className="text-center mt-12"> ~{data.testimonials.name5}~</p> </div>}
            {data.testimonials.quote7 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote7}"</p><p className="text-center mt-12"> ~{data.testimonials.name7}~</p></div>}
            {data.testimonials.quote8 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote8}"</p><p className="text-center mt-12"> ~{data.testimonials.name8}~</p> </div>}
            {data.testimonials.quote9 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote9}"</p><p className="text-center mt-12"> ~{data.testimonials.name9}~</p></div>}
            {data.testimonials.quote10 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote10}"</p><p className="text-center mt-12"> ~{data.testimonials.name10}~</p></div>}
            {data.testimonials.quote11 && <div className="bg-darktan p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote11}"</p><p className="text-center mt-12"> ~{data.testimonials.name11}~</p> </div>}
            {data.testimonials.quote12 &&<div className="bg-darktan p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote12}"</p><p className="text-center mt-12"> ~{data.testimonials.name12}~</p></div>}
            {data.testimonials.quote13 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote13}"</p><p className="text-center mt-12"> ~{data.testimonials.name13}~</p></div>}
            {data.testimonials.quote14 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"> <p >"{data.testimonials.quote14}"</p><p className="text-center mt-12"> ~{data.testimonials.name14}~</p> </div>}
            {data.testimonials.quote15 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"><p >"{data.testimonials.quote15}"</p><p className="text-center mt-12"> ~{data.testimonials.name15}~</p></div>}
            {data.testimonials.quote16 && <div className="bg-darktan/30 p-4 text-white/80 my-auto"><p >"{data.testimonials.quote16}"</p><p className="text-center mt-12"> ~{data.testimonials.name16}~</p></div>}    */}
        </div>      
    </Layout>
)
              }

export default TestimonialsPage

export const query = graphql`
  query TestimonialsQuery {
    testimonials: sanityTestimonials(_type: {eq: "testimonials"}) {
    name
    name10
    name11
    name12
    name13
    name14
    name15
    name16
    name2
    name3
    name4
    name5
    name6
    name7
    name8
    name9
    quote
    quote10
    quote11
    quote12
    quote13
    quote15
    quote14
    quote16
    quote2
    quote3
    quote4
    quote5
    quote6
    quote7
    quote8
    quote9
    image1{
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image2 {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image3 {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image4 {
      asset {
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
  }
}
`