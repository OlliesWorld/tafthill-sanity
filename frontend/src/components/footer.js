import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer className="pt-12">
      <div className="w-full lg:w-2/3 lg:flex justify-center  content-center m-auto pb-8">
        <div className="w-48 md:w-1/4 m-auto pl-8 lg:pl-0 text-center flex">
          <p className="uppercase my-auto">Follow us</p>
          <a className="my-auto"
            href="https://www.facebook.com/TaftHillAcres/?ref=hl"
            aria-label="Head to Facebook to find out more"
          >
            <svg
              className="h-8 w-8 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <div className="w-full  p-6 lg:mt-8 lg:mr-8 h-auto text-center">
          <h3 className="text-md justify-center text-xl">
            Fort Collins Horse Boarding Facility
          </h3>
          <p className="text-center">
            Serving the Fort Collins community since 2012
          </p>
        </div>
        <div className="md:w-3/4 md:m-auto lg:w-2/3 text-center  mt-8 p-4 ">
          {/* <p className='mb-4'>Menu</p> */}
          <div className="grid grid-cols-2  text-sm ">
            <Link className="p-2 border-b-2 border-r-2 border-slate-300" to="/">
              Home
            </Link>
            <Link className="p-2 border-b-2 border-slate-50" to="/about">
              About
            </Link>
            <Link
              className="p-2 border-b-2 border-r-2 border-slate-50"
              to="/facility"
            >
              Facility
            </Link>
            <Link className="p-2 border-b-2  border-slate-50" to="/training">
              Training
            </Link>
            <Link
              className="pr-6 pt-2 border-r-2 border-slate-50"
              to="/testimonials"
            >
              Testimonials
            </Link>
            <Link className="p-2 mt-2 ml-4 bg-darktan text-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="pl-4 lg:pl-60 bg-tan">
        <p className="text-xs pt-2 m-0">
          &copy; {new Date().getFullYear()} Taft Hill Acres
        </p>
        <p className="mt-0 text-sm ">
          Made with <span role="img">💙</span> by
          <a href="https://roni.rocks/" target="/">
            {" "}
            Roni
          </a>
        </p>
      </div>
    </footer>
  )
}
