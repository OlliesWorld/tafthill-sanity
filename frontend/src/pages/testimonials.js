import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const TestimonialsPage = ({data}) => {

return (
 
  <Layout>
     <Seo title="Testimonials" />
        <div className="lg:w-3/4 m-auto  gap-8 mb-12 text-xl">
          <h1 className="text-darktan font-extrabold text-5xl text-center mb-8">Testimonials</h1>
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
                <GatsbyImage image={data.testimonials.image2.asset.gatsbyImageData} alt={data.testimonials.image2.asset.altText} className="lg:h-96  lg:ml-4"/>
             
              </div>}
            {data.testimonials.quote3 && <div className="lg:flex mb-12 ">
            <GatsbyImage image={data.testimonials.image3.asset.gatsbyImageData} alt={data.testimonials.image3.asset.altText} className="lg:h-96  lg:mr-4"/>
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
            <GatsbyImage image={data.testimonials.image4.asset.gatsbyImageData} alt={data.testimonials.image4.asset.altText} className="lg:h-96  lg:ml-4"/>
            </div>}
           
            {data.testimonials.quote5 && <div className="lg:flex mb-12 ">
              <GatsbyImage image={data.testimonials.image5.asset.gatsbyImageData} alt={data.testimonials.image5.asset.altText} className="h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p>" {data.testimonials.quote5} "</p>
                <p className="font-bold text-darktan text-center mt-8">~ {data.testimonials.name5} ~</p>
              </div>
              </div>}

            {data.testimonials.quote6 && <div className="lg:flex mb-12 ">
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >" {data.testimonials.quote6} "</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name6} ~</p>
                </div>
                <GatsbyImage image={data.testimonials.image6.asset.gatsbyImageData} alt={data.testimonials.image6.asset.altText} className="lg:h-96  lg:ml-4"/>
             
              </div>}
            {data.testimonials.quote7 && <div className="lg:flex mb-12 ">
            <GatsbyImage image={data.testimonials.image7.asset.gatsbyImageData} alt={data.testimonials.image7.asset.altText} className="lg:h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >"{data.testimonials.quote7}"</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name7}~</p>
              </div>
              </div>}
            {data.testimonials.quote8 && <div  className="lg:flex mb-12 "> 
            <div className="lg:w-2/3 bg-tan my-auto p-8">
              <p >"{data.testimonials.quote8}"</p>
              <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name8}~</p>
            </div>
            <GatsbyImage image={data.testimonials.image8.asset.gatsbyImageData} alt={data.testimonials.image8.asset.altText} className="lg:h-96  lg:ml-4"/>
            </div>}
            {data.testimonials.quote9 && <div  className="lg:flex mb-12 "> 
            <div className="lg:w-2/3 bg-tan my-auto p-8">
              <p >"{data.testimonials.quote9}"</p>
              <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name9}~</p>
            </div>
            <GatsbyImage image={data.testimonials.image9.asset.gatsbyImageData} alt={data.testimonials.image9.asset.altText} className="lg:h-96  lg:ml-4"/>
            </div>}
            {data.testimonials.quote10 && <div className="lg:flex mb-12 ">
              <GatsbyImage image={data.testimonials.image10.asset.gatsbyImageData} alt={data.testimonials.image10.asset.altText} className="h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p>" {data.testimonials.quote10} "</p>
                <p className="font-bold text-darktan text-center mt-8">~ {data.testimonials.name10} ~</p>
              </div>
              </div>}

            {data.testimonials.quote11 && <div className="lg:flex mb-12 ">
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >" {data.testimonials.quote11} "</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name11} ~</p>
                </div>
                <GatsbyImage image={data.testimonials.image11.asset.gatsbyImageData} alt={data.testimonials.image11.asset.altText} className="lg:h-96  lg:ml-4"/>
             
              </div>}
            {data.testimonials.quote12 && <div className="lg:flex mb-12 ">
            <GatsbyImage image={data.testimonials.image12.asset.gatsbyImageData} alt={data.testimonials.image12.asset.altText} className="lg:h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >"{data.testimonials.quote12}"</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name12}~</p>
              </div>
              </div>}
            {data.testimonials.quote13 &&<div  className="lg:flex mb-12 "> 
            <div className="lg:w-2/3 bg-tan my-auto p-8">
              <p >"{data.testimonials.quote13}"</p>
              <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name13}~</p>
            </div>
            <GatsbyImage image={data.testimonials.image13.asset.gatsbyImageData} alt={data.testimonials.image13.asset.altText} className="lg:h-96  lg:ml-4"/>
            </div>}
            {data.testimonials.quote14 && <div className="lg:flex mb-12 ">
            <GatsbyImage image={data.testimonials.image14.asset.gatsbyImageData} alt={data.testimonials.image14.asset.altText} className="lg:h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >"{data.testimonials.quote14}"</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name14}~</p>
              </div>
              </div>}
            
              {data.testimonials.quote15 &&<div  className="lg:flex mb-12 "> 
            <div className="lg:w-2/3 bg-tan my-auto p-8">
              <p >"{data.testimonials.quote15}"</p>
              <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name15}~</p>
            </div>
            <GatsbyImage image={data.testimonials.image15.asset.gatsbyImageData} alt={data.testimonials.image15.asset.altText} className="lg:h-96  lg:ml-4"/>
            </div>}
            {data.testimonials.quote16 && <div className="lg:flex mb-12 ">
            <GatsbyImage image={data.testimonials.image16.asset.gatsbyImageData} alt={data.testimonials.image16.asset.altText} className="lg:h-96  lg:mr-4"/>
              <div className="lg:w-2/3 bg-tan my-auto p-8">
                <p >"{data.testimonials.quote16}"</p>
                <p className="text-darktan font-bold text-center mt-12"> ~{data.testimonials.name16}~</p>
              </div>
              </div>}
           
            
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
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image2 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image3 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image4 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image5 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image6 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image7 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image8 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image9{
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image10 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image11 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image12 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image13{
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image14 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 400)
      }
    }
    image15 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
    image16 {
      asset {
        altText
        filename
        gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 850)
      }
    }
  }
}
`