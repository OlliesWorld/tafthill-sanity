import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { GatsbyImage } from "gatsby-plugin-image"
import Form from '../components/form'

const ContactPage = () => {

return (
 
  <Layout>
     <Seo title="Contact us" />
     <div className="mb-12">
       <h2 className="text-darktan text-3xl text-center font-bold">Send us a message</h2>
     <div className=" container grid lg:grid-cols-2  m-auto">
       
       <Form />
       
        <div className="lg:w-2/3 col-span-1 bg-tan  lg:h-8/12  p-6 text-xl m-auto">
          <p>We are conveniently located within 2 miles of CSU, and Old Town. There is direct access to the Poudre Trail and close access to Lory State Park and Reservoir Ridge.</p>
          <div className="text-3xl text-center mt-12">
            <p>1012 N Taft Hill Rd</p>
            <p>Fort Collins, CO 80521</p>
          </div>
                   
        </div>
    </div>
    </div> 
  </Layout>
)
              }

export default ContactPage

