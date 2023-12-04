import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
        swal("Welcome!", "Message successfull", "success");

        emailjs.sendForm('service_cou5tnx', 'template_iqim3ig', form.current, 'uwL4DDLttcknZgLx7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='contacts' id='Contacts'>
            <div className='myContacts'>
                <h1>My Contact...</h1>
                <div className='myDiv'></div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='contactsInput'>
                <input type="text" name="user_name" placeholder='Name....' />
                <input type="email" name="user_email" placeholder='Email....' />
                <textarea name="message" placeholder="Message...." />
                {/* <input type="submit" value="Send" className='sendBtn' /> */}
                <button onClick={sendEmail}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;
