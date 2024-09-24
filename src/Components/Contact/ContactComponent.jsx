import React from 'react'
import './contact.css'


export default function ContactComponent() {
    return (
        <>
            <section className='contactSection_container'>
                <div className='contactFirst'>
                    <div className='contactDetail'>
                        <h1>Contact Detail</h1>
                        <ul>
                            <li>(027) 6468-679</li>
                            <li>(026) 7982-054</li>
                            <li>sereipanhachanpersonal@gmail.com</li>
                        </ul>
                    </div>

                    <div className="contact_socialMedia">
                        <h1>Social Media</h1> 
                        <ul>
                            <li><a href="https://github.com/"><i class="fa-brands fa-square-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://www.whatsapp.com/"> <i class="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>


                <div className='formContainer'>
                    <form>
                        <h1>Contact</h1>
                        <div className='name'>
                            <p>Name:</p>
                            <input type="text" required/>
                        </div>
                        <div className='email'>
                            <p>Email:</p>
                            <input type="email" required/>
                        </div>
                        <div className='detail'>
                            <p>Detail:</p>
                            <textarea placeholder='Leave us a feedback...' required></textarea>
                        </div>                
                        <div className='sendButton'>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}
