import * as React from "react"
import { Link } from "gatsby"
import NavBar from "./navBar"

const Header = ({ siteTitle, siteDescription }) => (
<header className="m-auto pt-8 mb-8 border-b-8 border-darktan">
          <div className="grid align-center text-darktan  text-center ">
            <Link className="text-7xl" to="/"> {siteTitle} </Link>
              <p className="text-4xl">{siteDescription}</p>
          </div>

          <NavBar />
        
</header>
)

export default Header
