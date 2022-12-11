import * as React from "react"
import { Link } from "gatsby"
import NavBar from "./navBar"

const Header = ({ siteTitle, siteDescription }) => (
<header className="max-w-2xl m-auto pt-8 mb-8 border-b-4 border-darktan">
          <div className="grid align-center text-darktan  text-center ">
            <Link className="text-6xl" to="/"> {siteTitle} </Link>
              <p className="">{siteDescription}</p>
          </div>

          <NavBar />
        
</header>
)

export default Header
