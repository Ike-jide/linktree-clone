import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Contact.css';


function Contact(){
   const [enteredFirstName, setEnteredFirstName]=useState('');
   const [enteredLastName, setEnteredLastName]=useState('');
   const [enteredEmailName, setEnteredEmailName]=useState('');
   const [enteredTerms, setEnteredTerms]=useState(false); 
function dataHandler(e) {
e.preventDefault()
console.warn("all data",enteredFirstName,enteredLastName,enteredEmailName,enteredTerms,)
}
  
  return(
    <div className="contact">
        <div className="content">
        <Link to='/contact'id="contact"></Link>
    <div className="contact-header">
    <h3>Contact Me</h3>
    <p>Hi there contact me to ask me about anything you have in mind</p>
    </div>
        <form onSubmit={dataHandler} className="contact-form">
            <label>First Name</label>
            <input
            onChange={(e)=>setEnteredFirstName(e.target.value)}
            required
            id="first_name"
            placeholder="enter your first name"
            
            />
            <label>Last Name</label>
            <input
            placeholder="enter your last name"
            onChange={(e)=>setEnteredLastName(e.target.value)}
            required
            id="last_name"
            
            />
            <label>Email</label>
            <input
            required
            id="email"
            placeholder="yourname@gmail.com"
            onChange={(e)=>setEnteredEmailName(e.target.value)}
            />
            <label>Message</label>
            <textarea
            id="message"
            placeholder="send a message if possible"
            >
                
            </textarea>
           <input 
           onChange={(e)=>setEnteredTerms(e.target.checked)}
           type="checkbox"
           /><span>Agree to the terms and conditions</span><br/><br/>
            <button
            id="btn_submit"
            >Submit</button>
        </form>
    </div>
    </div>
  )
}
export default Contact;