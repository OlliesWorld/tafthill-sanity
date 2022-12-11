import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { GatsbyImage } from "gatsby-plugin-image"
import Form from '../components/form'

const ContactPage = () => {

return (
 
  <Layout>
     <Seo title="Contact us" />
     <div className="w-3/4 grid grid-cols-2 m-auto text-center">
       <Form />
              <div className="bg-tan h-1/2 w-3/4 p-6 items-center">
                  <p>We are conveniently located within 2 miles of CSU, and Old Town. There is direct access to the Poudre Trail and close access to Lory State Park and Reservoir Ridge.</p>
<br/>
                    <p>1012 N Taft Hill Rd
                    Fort Collins, CO 80521</p>
              </div>
    </div>
      
  </Layout>
)
              }

export default ContactPage

