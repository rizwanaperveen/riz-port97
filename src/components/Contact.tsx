import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';
function Contact() {
  return (
    <div id="contact" className='con-container'>
        <div className='con-grid md:grid-cols-2'>
        <div className='box'>
            <h2 className='con-head' data-aos="zoom-in-up">Contact</h2>
            <p className='con-text'>
          Drop me a line, give me a call or Drop me a message.
          </p>
          <div className='con-flex'>
            <AiOutlineMail size={30} /> rizwanaperveen9020@gmail.com
            </div> 
            <div className='con-flex'>
            <BsTelephone size={30} items-center/> 03122229020
            </div>
        </div>
           <div className='box'>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text" className='input-field' id="name" />
            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type="text" className='input-field' id="email" />
            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='msg'>Message</label>
                <textarea className='text-field'
                id="msg" rows-={8}>
                </textarea>
            </div>
            <button className='btn'>Send</button>
           </div>
    </div>
    
    </div>
  )
}

export default Contact