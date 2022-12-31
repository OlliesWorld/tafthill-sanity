import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full mb-8">
            <div >
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                       
                        <div className="md:hidden">
                            <button
                                className="p-2  rounded-md outline-none focus:border-tan focus:border"
                                onClick={() => setNavbar(!navbar)}
                                aria-label="Nav mobile hamburger link"
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-darktan"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-darktan"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="text-center text-2xl items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-tan uppercase">
                            <li className=" hover:border-b-2 hover:ease-in-out hover:transition-all">
                                <Link  to="/">Home</Link>
                            </li>
                            <li className=" hover:border-b-2 hover:ease-in-out">
                                <Link  to="/about">About</Link>
                            </li>
                            <li className=" hover:border-b-2 hover:ease-in-out">
                                <Link  to="/facility">Facility</Link>
                            </li>
                            <li className=" hover:border-b-2 hover:ease-in-out">
                                <Link  to="/training">Training</Link>
                            </li>
                         
                            <li className=" hover:border-b-2 hover:ease-in-out">
                                <Link  to="/testimonials">Testimonials</Link>
                            </li>
                            <li className=" hover:border-b-2 hover:ease-in-out">
                                <Link  to="/contact">Contact</Link>
                            </li>
                        </ul>

                       
                    </div>
                </div>
               
            </div>
        </nav>
    
)
                      }


