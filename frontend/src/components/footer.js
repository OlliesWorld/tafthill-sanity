import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


export default function Footer() {
  return (
    <footer  className="text-tan flex flex-col-reverse text-center lg:flex-row border-t-8 border-darktan pb-8">
          <a href="https://www.facebook.com/TaftHillAcres/?ref=hl"  className="m-auto"><svg className="h-8 w-8 text-darktan"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
      <div className="m-auto pt-12 h-auto">
       
        <p className="text-md justify-center ">Fort Collins Horse Boarding Facility</p>

        <p className="text-xs pt-2 m-0">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="mt-0 text-sm ">Made with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
      </div>
      <div className="mx-auto mt-8 bg-tan/70">
            <StaticImage src="../images/Logo-THA.png" alt="Taft Hill Acres"  width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                />
          </div>


    </footer >
  );
}
