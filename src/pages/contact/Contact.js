import React, { useEffect, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

import './contact.css';
import { arrow3, strategytent } from '../../assets';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const firstName = useRef();
    const lastName = useRef();
    const number = useRef();
    const mail = useRef();
    const option = useRef();
    const message = useRef();

    const form = useRef()







    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_daw9o3e', 'template_0e9tqia', form.current, 'dsm8ll_e-R-Pe4qGs')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.log('Error sending email:', error.text);
            });

        e.target.reset();
    }

    return (
        <>
            <Helmet>
                <title>Sideclic – Contact </title>
                <meta name='description' content=' Vous êtes à un clic de voir votre présence en ligne passer au niveau supérieur.
                 Prenez rendez-vous pour une session de conseil gratuite ' />
                <link rel='canonical' href='/contact' />
            </Helmet>

            <div className='position-relative'>
                <img className='position-absolute' style={{ maxWidth: "95%" }} src={strategytent} alt="" />
                <Form ref={form} onSubmit={(e) => { sendEmail(e) }}     >
                    <Container className='footer-container '>
                        <div className="row mb-5">
                            <div>
                                <h2 className='ft-title'>Vous êtes à un clic de voir votre présence en ligne passer au niveau supérieur. </h2>
                            </div>
                        </div>
                        <div className="row mb-5 ">
                            <div className='col-md-4  mb-5'>
                                <div className="form-group">
                                    <input type="text" className="form-control clic-label" placeholder="Prénom*" required name='firstName'
                                        ref={firstName}

                                    />
                                </div>
                            </div>
                            <div className='col-md-4  mb-5'>
                                <div className="form-group">
                                    <input type="text" className="form-control clic-label" placeholder="Nom*" required name='lastName'

                                        ref={lastName}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className='col-md-4  mb-5'>
                                <div className="form-group">
                                    <input type="number" className="form-control clic-label" placeholder="Téléphone*" name='number'

                                        ref={number}
                                    />
                                </div>
                            </div>
                            <div className='col-md-4  mb-5'>
                                <div className="form-group">
                                    <input type="email" className="form-control clic-label" placeholder="Mail*" name='email'

                                        ref={mail}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className='col-md-4  mb-5'>
                                <select className="form-control clic-label " ref={option} name='option' >
                                    <option selected disabled>Votre besoin*</option>
                                    <option>Juste histoire de discuter</option>
                                    <option>Devis site web</option>
                                    <option>Devis social media management
                                    </option>
                                    <option>Devis stratégie marketing digital</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 '>
                                <div className="form-group mb-3">
                                    <label className='d-block mb-2 clic-label' >Message:</label>
                                    <textarea className="form-control txtare" id="exampleFormControlTextarea1" rows="3" name='message' ref={message}></textarea>
                                </div>

                                <div>
                                    <Button className='d-block textare-send' type="submit"  >
                                        Envoyer
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </Container>
                    <Container className='footer-btn-b'>
                        <div className='d-flex advice flex-column justify-content-center mt-5'>

                            <div className='position-relative'>
                                <p>Prenez rendez-vous avec l’un de nos conseillers. Choisissez la date et l’heure qui vous conviennent.



                                </p>
                                <div className='d-flex align-items-basline  footer-arr '>
                                    <img src={arrow3} style={{ maxWidth: "100%", width: 100 }} alt="" />
                                    <Button className='rdv-btn' onClick={() => window.open('https://calendly.com/sideclic/session_gratuite_de_conseil', '_blank', 'rel=noopener noreferrer')} >Je souhaite parler à un conseiller
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Form>
            </div>
        </>

    )
}

export default Contact