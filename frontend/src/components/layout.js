/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <div className="bg-white h-full">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteDescription={data.site.siteMetadata?.description || `Description`} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
