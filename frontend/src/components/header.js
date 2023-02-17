import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "./hamburger"

const Header = ({ siteTitle, siteDescription }) => (
<header className="m-auto pt-8 mb-8 ">
          <div className="grid align-center text-black  text-center ">
            <StaticImage src="../images/Logo-THA.png" alt="logo" className="w-1/3 m-auto"/>    
          </div>
        <Hamburger />     
</header>
)

export default Header
