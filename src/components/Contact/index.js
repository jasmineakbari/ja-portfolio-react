import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // hook to handle form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    // how to handle form being typed in
    function handleChange(e) {
        // email validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        // name and message validation
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        } 
        // gathers input from form for each form entry 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // JSX sets rendering
    return (
        <section id="contact">
            <h1>Contact Me</h1>
            <form id="contact-form" action="https://formspree.io/f/xgeradya" method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit" id="submit">Submit</button>
            </form>
        </section>
    );
};
    
export default ContactForm;