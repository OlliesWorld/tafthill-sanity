import { Link } from 'gatsby';
import React from 'react';


export default function Footer() {
  return (
    <footer className='pt-12' >
      <div className='w-full lg:w-2/3 lg:flex justify-center  content-center m-auto pb-8'>
        <div className='lg:w-1/6 justify-center lg:mt-24 lg:text-left text-center'>
          <p className='uppercase '>Follow us</p>
              <div className='ml-40 lg:m-auto'><a href='https://www.facebook.com/TaftHillAcres/?ref=hl' aria-label="Head to Facebook to find out more" ><svg className="h-8 w-8 text-darktan"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></div>
        </div>
        <div className="w-full lg:w-1/3 p-6 lg:mt-20 lg:mr-8 h-auto">
        
          <h3 className="text-md justify-center text-xl">Fort Collins Horse Boarding Facility</h3>
          <p>We love all things animals, so Taft Hill Acres was the perfect addition to our family.</p>
        
        </div>
        <div className="text-center  mt-8 p-4 ">
                  <p className='mb-4'>Menu</p>
                  <div className='grid grid-cols-2  text-sm '>
                    <Link className='p-2 border-b-2 border-r-2 border-slate-300' to='/'>Home</Link>
                    <Link className='p-2 border-b-2 border-slate-50'  to='/about'>About</Link>
                    <Link className='p-2 border-b-2 border-r-2 border-slate-50' to='/facility'>Facility</Link>
                    <Link className='p-2 border-b-2  border-slate-50' to='/training'>Training</Link>
                    <Link className='pr-6 pt-2 border-r-2 border-slate-50' to='/testimonials'>Testimonials</Link>
                    <Link className='p-2 mt-2 ml-4 bg-darktan text-white' to='/contact'>Contact</Link>
                  </div>
            </div>
      </div>

      <div className='pl-4 lg:pl-60 bg-tan'> 
        <p className="text-xs pt-2 m-0">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="mt-0 text-sm ">Made with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
      </div>
    </footer >
  );
}
