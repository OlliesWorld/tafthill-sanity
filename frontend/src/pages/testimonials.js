import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"


const TestimonialsPage = ({data}) => {

return (
 
  <Layout>
     <Seo title="Testimonials" />

        <div className="w-3/4 grid grid-cols-3 gap-16 justify-center mx-auto mb-8 text-center">
            <div className="block p-8 rounded-br-lg rounded-tl-lg shadow-lg bg-tan max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name}</h5>     
            </div>
            
            <div className="block p-8 rounded-br-lg rounded-tl-lg shadow-lg bg-tan max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote4}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name4}</h5>     
            </div>
            <div className="block p-8 rounded-br-lg rounded-tl-lg shadow-lg bg-tan max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote5}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name5}</h5>     
            </div>
            <div className="block p-8 rounded-br-lg rounded-tl-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote2}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name2}</h5>     
            </div>
            <div className="block p-8 rounded-br-lg rounded-tl-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote3}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name3}</h5>     
            </div>
            <div className="block p-8 rounded-br-lg rounded-tl-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote6}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name6}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote7}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name7}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote8}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name8}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote9}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name9}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote10}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name10}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote11}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name11}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote12}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name12}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote13}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name13}</h5>     
            </div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <p className="text-gray-700 text-base mb-4">
                {data.testimonials.quote14}
                </p>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{data.testimonials.name14}</h5>     
            </div>
            
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
  }
}
`