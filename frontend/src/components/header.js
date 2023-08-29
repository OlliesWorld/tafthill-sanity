import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "./hamburger"
import { Link } from "gatsby"

const Header = ({ siteTitle, siteDescription }) => (
<header className="m-auto pt-8 mb-8 ">
          <div className="w-5/6 mx-auto grid align-center text-black  text-center ">
            <Link to="/" ><StaticImage width={550} src="../images/Logo-THA.png" alt="logo" className="max-w-[550px] w-1/2 lg:w-1/3 m-auto"/></Link>
          </div>
        <Hamburger />     
</header>
)

export default Header
