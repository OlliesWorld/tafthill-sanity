import React, { useState } from "react"
import { navigate } from 'gatsby'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setMessage({ ...message, [e.target.message]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/thanks/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <div className="block p-6 max-w-md m-auto text-center my-4">
    <form data-netlify="true" action="/" name="contactUs" method="post" onSubmit={handleSubmit} className="w-full">
     {/* <label htmlFor="nameInput" className="text-4xl text-dark-tan mb-2 w-full font-bold">Send us a Message</label> */}
      <input type="hidden" name="form-name" value="contact-form" />
        
        <p><label className="hidden" htmlFor="name">Name:</label>
        <input id="name" className='p-2 mb-2 w-3/4 md:w-96 text-black border-b-2 border-darktan active:bg-tan focus:outline-none focus:ring focus:ring-tan' name="Name" type="text" onChange={handleChange} required placeholder="Name"  /></p>
        <p><label className="hidden" htmlFor="email">Email:</label>
        <input id="email" className='p-2 mb-2 w-3/4 md:w-96 text-black border-b-2  border-darktan active:bg-tan focus:outline-none focus:ring focus:ring-tan' type='email' placeholder='Email' name='email' onChange={handleChange} required /></p>
        <p><label className="hidden" htmlFor="message">Message:</label>
        <textarea id="message" className='w-3/4 md:w-96 text-black border-2 border-darktan active:bg-tan focus:outline-none focus:ring focus:ring-tan' placeholder='Message' name='message' rows='8' minLength="8" onChange={handleChange} required /></p>
        <button className='bg-darktan text-white p-2 mt-4  hover:bg-tan hover:text-black hover:border-darktan border-2' type='submit' >Contact Us</button>
            

        </form>
  
        </div>
    )
}
export default ContactForm