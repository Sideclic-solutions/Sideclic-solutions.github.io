
import Container from 'react-bootstrap/Container';



import { logo, fb, insta, linkedin, mls, pc } from '../../assets';

// custom styles
import './footer.css';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (

        <div className='footer-bg'>

            <Container className='main-footer-cn'>

                <section className="footers pt-5 pb-3">
                    <div className=" pt-5">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4 footers-one">
                                <div className="footers-logo">
                                    <img src={logo} alt="Logo" style={{ width: 120 }} />
                                </div>
                                <div className="footers-info foot-desc mt-3">
                                    <p>Agence de marketing digitale <br></br> spécialisée dans la création
                                        <br></br> de sites web et la gestion des <br></br>
                                        réseaux sociaux pour les   <br></br>
                                        auto-entrepreneurs,  <br></br>
                                        micro-entrepreneurs et   <br></br>
                                        artisans en France.
                                    </p>
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 footers-two">
                                <h5 className='foot-head'>Nos expertises métiers

                                </h5>
                                <div className="footers-info foot-desc mt-3">
                                    <Link className='mb-2' style={{ textDecoration: 'none', color: '#1D1D1B', display: 'block' }} to={'/site_vitrine'}>  Création de site web pour <br></br>
                                        auto-entrepreneur <br></br></Link>
                                    <Link className='mb-2' style={{ textDecoration: 'none', color: '#1D1D1B', display: 'block' }} to={'/social_media_management'}>   Stratégie social media pour <br></br>
                                        auto-entrepreneur <br></br></Link>

                                    <Link className='mb-3' style={{ textDecoration: 'none', color: '#1D1D1B', display: 'block' }} to={'/strategie_marketing_digital'}>        Stratégie marketing  <br></br> pour auto-entrepreneur</Link>

                                </div>
                                <h5 className='foot-head'>Qui sommes-nous ?
                                </h5>
                                <ul className="list-unstyled">
                                    <li className='mb-2'>
                                        <Link style={{ textDecoration: 'none', color: '#1D1D1B', fontFamily: 'regular', fontSize: 15 }}


                                            to={'/mission'}>    Notre mission</Link>


                                    </li>
                                    <li style={{ textDecoration: 'none', color: '#1D1D1B', fontFamily: 'regular', fontSize: 15 }}>Contact@sideclic.fr</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 footers-three">
                                <h5 className='foot-head'>Social Media </h5>

                                <div className='d-flex mb-3'>
                                    <div className='me-4'>

                                        <a href="https://www.linkedin.com/company/sideclic/" target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin' /> </a>
                                    </div>
                                    <div className='me-4'>

                                        <a href="https://www.facebook.com/sideclicsolutions" target="_blank" rel="noreferrer"><img src={fb} alt='facebook' /> </a>

                                    </div>
                                    <div>
                                        <a href="https://www.instagram.com/sideclic/
" target="_blank" rel="noreferrer"><img src={insta} alt='instagram' />
                                        </a>
                                    </div>
                                </div>
                                <ul className="list-unstyled">
                                    <li className='mb-2'>

                                        <a style={{ textDecoration: 'none', color: '#1D1D1B', fontFamily: 'regular', fontSize: 15 }} href={mls} target="_blank"
                                            rel="noreferrer">
                                            Mentions légales
                                        </a> <br></br>
                                    </li>
                                    <li>

                                        <a style={{ textDecoration: 'none', color: '#1D1D1B', fontFamily: 'regular', fontSize: 15 }} href={pc} target="_blank"
                                            rel="noreferrer">
                                            Politique de confidentialité
                                        </a>


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="copyright">
                    <div className="mt-4">
                        <div className="row text-center">
                            <div className="col-md-12 pt-3">
                                <p> POWERED BY SIDECLIC</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>

    )
}

export default Footer