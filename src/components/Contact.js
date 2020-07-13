import React from 'react'
import mail from '../icons/mail.svg'

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <img src={mail} alt='mail' width='70px' height='70px' ></img>
            <p>Send me a message, my inbox is always open and I'm currently free</p>
            <a href='mailto:stanleygarbo@gmail.com'>Message Me</a>
        </section>
    )
}

export default Contact
