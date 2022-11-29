import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(props) {
    


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5johba7', 'template_td40xhl', form.current, 'cfRho7vWafjuPiyZc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  



    return (
        <>
        <div className="contact-form-wrap animate-from-bottom">
            <h5>Write Us</h5>
            <form ref={form} onSubmit={sendEmail}>
                <div className="contact-input-row-wrap flex">
                    <div className="contact-input-row flex">
                        <div className="contact-input-col">
                            <input type="text" placeholder="Name" name='first-name'/>
                        </div>
                        <div className="contact-input-col">
                            <input type="text" placeholder="Last Name" name='last-name'/>
                        </div>
                    </div>
                    <div className="contact-input-row">
                        <input type="number" placeholder="Phone" name='number'/>
                    </div>
                    <div className="contact-input-row">
                        <input type="email" placeholder="Email" name='email'/>
                    </div>
                    <div className="contact-input-row">
                        <textarea placeholder="Please describe what you need" name='message'></textarea>
                    </div>
                    <div className="contact-input-row submit flex">
                        <input type="submit" value="Send"/>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default ContactForm;
