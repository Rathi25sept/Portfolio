import React from 'react';
import './App.css';

function Contact() {
    return (
        <div className='contacts' id='Contacts'>
            <div className='myContacts'>
                <h1>My Contact...</h1>
                <div className='myDiv'></div>
            </div>
            <div className='contactsInput'>
                <input type="text" placeholder='Name....' />
                <input type="text" placeholder='Email....' />
                <textarea name="msg" id="myMsg" placeholder="Message...." cols="35" rows="8"></textarea>
                <div className='myBtn'>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;