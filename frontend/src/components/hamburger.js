import React from "react"

const Hamburger = () => (

<div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <li><a className="menu__item" href="/">Home</a></li>
      <li><a className="menu__item" href="/about">About</a></li>
      <li><a className="menu__item" href="/facility">Facility</a></li>
      <li><a className="menu__item" href="/training">Training</a></li>
      <li><a className="menu__item" href="/testimonials">Testimonials</a></li>
      <li><a className="menu__item" href="/contact">Contact</a></li>
    </ul>
  </div>
)
export default Hamburger;