import { Button, Col, Container, Row } from 'react-bootstrap';
import './social.css';
import { arrow2, arrow3, line2, one, point, socialCloud, socialbg, three, two } from '../../assets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SocialMedia = () => {


    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Helmet>
                <title>Social Media Management pour auto-entrepreneur – Sideclic  </title>
                <meta name='description' content='un site web de qualité, facilement administrable qui reflète votre image et votre expertise, le tout à 
                un tarif adapté à votre budget. ' />
                <link rel='canonical' href='/social' />
            </Helmet>
            <div className='position-relative social-1'>
                <img className='position-absolute' style={{ maxWidth: "80%" }} src={socialCloud} alt="" />
                <Container className='position-relative social-heading ' >
                    <div className='social-container'>
                        <h1 className='social-media-title'>Social Media Management pour <br></br> auto-entrepreneurs</h1>
                        <p className='social-media-p'>un site web de qualité, facilement administrable qui reflète votre image <br></br>
                            et votre expertise, le tout à un tarif adapté à votre budget.</p>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 justify-content-center'>
                        <img className='socialbg' src={socialbg} style={{ maxWidth: "100%", display: 'block', width: 180 }} alt="" />
                    </div>

                    <div className='col-lg-6 justify-content-center social-2 position-relative'>

                        <img src={line2} style={{ maxWidth: "100%" }} alt="" />
                        <p>Votre présence sur les réseaux sociaux doit découler d’une  <br></br> stratégie bien étudiée qui prend en compte les spécificités  <br></br> de votre activité, vos objectifs et les attentes de votre  <br></br> cible. Cette stratégie constituera le fondement sur lequel  <br></br> nous nous baserons pour déployer notre plan d’action qui  <br></br> repose sur 3 principaux éléments :
                        </p>
                        <div style={{ position: 'absolute', right: "25%", top: "90%" }}>
                            <img src={arrow2} style={{ maxWidth: "100%", width: 100 }} alt="" />
                        </div>

                    </div>
                </div>
            </Container>
            <Container className='strategies-3' fluid>
                <Row>
                    <Col lg={4}>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <img src={one} className='d-block me-3' alt="" />
                                </div>

                                <h3 className='strategy-title'>Stratégie d’Acquisition et <br></br>  notoriété</h3>
                            </div>
                            <p className='strategy-p'>L’acquisition de nouveaux abonnés <br></br> vous permettra de développer la <br></br>  notoriété de votre marque. <br></br>
                                Nous vous aiderons à trouver les <br></br> personnes qui correspondent aux <br></br> profils socio-démographiques et   <br></br>
                                comportementaux de votre cible. En <br></br> vous adressant aux bonnes personnes, <br></br>
                                vous augmentez vos chances de <br></br> convertir vos abonnés en <br></br> clients et en ambassadeurs de votre marque.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <img src={two} className='d-block me-3' alt="" />
                                </div>
                                <h3 className='strategy-title'>Engagement, fidélisation et <br></br>  image de marque</h3>
                            </div>
                            <p className='strategy-p'>Plus vos abonnés interagissent avec  <br></br> vos publications et plus leur <br></br> attachement à votre marque <br></br> augmente.
                                Notre rôle consiste à  <br></br> mettre en place une stratégie de  <br></br> contenu riche, répondant  <br></br> spécifiquement aux besoins de votre cible. <br></br>
                                Nous ferons tout ce qui est en notre  <br></br> pouvoir pour faire en sorte que vos  <br></br> abonnés s’arrêtent de scroller à  <br></br>   chacune de vos publications.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <img src={three} className='d-block me-3' alt="" />
                                </div>
                                <h3 className='strategy-title'> Conversion</h3>
                            </div>
                            <p className='strategy-p'>
                                L’objectif ultime de tout entrepreneur <br></br> est d’augmenter son chiffre d’affaires. <br></br> Vos objectifs sur les réseaux sociaux <br></br> doivent être alignés avec vos objectifs <br></br>
                                commerciaux. <br></br>
                                « L’important c'est de participer ». <br></br>
                                Certes, mais nous notre objectif est <br></br> de vous faire gagner. Gagner en  <br></br>    notoriété, gagner de nouveaux clients <br></br> et au bout du compte gagner de    l’argent.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                <div className='sm-managment'>
                    <h3>Notre prestation de Social Media Management comprend : </h3>
                    <div>
                        <ul className='sm-managment-li'>
                            <li>    <img src={point} className='d-block me-3' alt="" />Un audit de votre présence sur les réseaux sociaux.</li>
                            <li>    <img src={point} className='d-block me-3' alt="" /> La mise en place d’une stratégie Social Media adaptée à vos besoins.</li>
                            <li>    <img src={point} className='d-block me-3' alt="" />Le déploiement  d’un plan d’action. </li>
                            <li>   <img src={point} className='d-block me-3' alt="" />La création de contenu original à forte valeur ajoutée pour votre cible. </li>
                            <li>    <img src={point} className='d-block me-3' alt="" />Un reporting régulier de nos actions et résultats. </li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container>
                <div className='d-flex advice flex-column justify-content-center'>
                    <img src={line2} style={{ maxWidth: "100%" }} alt="" />
                    <div className='position-relative'>
                        <p>Prenez rendez-vous pour une session gratuite de conseil avec l'un de nos spécialistes en social media. <br></br>
                            Choisissez l'heure et la date qui vous conviennent.
                        </p>
                        <div className='d-flex align-items-basline  footer-arr '>
                            <img src={arrow3} style={{ maxWidth: "100%", width: 100 }} alt="" />
                            <Button className='rdv-btn' onClick={() => window.open('https://calendly.com/sideclic/session_gratuite_de_conseil', '_blank', 'rel=noopener noreferrer')}>Prendre rendez-vous
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>

            <div className='bottom-bg'>

            </div>
        </>


    )
}

export default SocialMedia