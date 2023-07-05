// custom style
import { Button, Container } from 'react-bootstrap';
import './strategy.css';
import { arrow, line1, strategytent } from '../../assets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Strategy = () => {

    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (

        <>
            <Helmet>
                <title>Stratégie marketing Digital pour auto-entrepreneur
                </title>
                <meta name='description' content='Vos clients interagissent avec votre marque via plusieurs canaux de communication et sans obéir à un ordre logique de progression.
 ' />
                <link rel='canonical' href='/strategie_marketing_digital' />
            </Helmet>
            <div className='position-relative'>
                <img className='position-absolute' style={{ maxWidth: "95%" }} src={strategytent} alt="" />
                <Container >
                    <h1 className='starategy-title'>
                        Stratégie marketing Digital pour <br></br> auto-entrepreneur.
                    </h1>
                </Container>
                <Container className='position-relative '>
                    <div className='row align-items-end'>
                        <div className='starategy col-lg-6'>
                            <div className='position-relative'>
                                <p className='position-relative starategy-discription' style={{ zIndex: 1 }}>
                                    Vos clients interagissent avec votre marque via plusieurs <br></br> canaux de communication et sans obéir à un ordre  <br></br> logique de progression.  <br></br>
                                    C’est pour cette raison qu’il est désormais primordial <br></br> d’adopter une approche omni-canal qui consiste à   <br></br>       interconnecter les différents points de contact afin   <br></br>
                                    d’offrir à vos clients une expérience homogène et <br></br> cohérente. <br></br>
                                    Sideclic prend en charge <span className='marker'>  la création et l’optimisation de <br></br> votre site web </span>,
                                    <span className='marker'> la gestion de vos réseaux  sociaux, </span>  et <br></br>    <span className='marker'>
                                        la création de vos campagnes PPC.  </span>  L’objectif est de <br></br> mettre en place un écosystème digital complet dans <br></br> lequel vos clients pourront naviguer facilement tout en  <br></br> profitant d’une expérience riche, unique et cohérente.
                                </p>
                            </div>
                        </div>
                        <div className='marketing-session col'>
                            <img className='line1' src={line1} style={{ maxWidth: "100%" }} alt="" />
                            <div>
                                <p className='mb-0 rdv-ss'>Demandez votre session d’accompagnement gratuite  <br></br>
                                    avec l’un de nos conseillers. <br></br>
                                    Choisissez l’heure et la date qui vous conviennent.
                                </p>
                                <div className='d-flex prdv'>
                                    <Button className='rdv-btn' onClick={() => window.open('https://calendly.com/sideclic/session_gratuite_de_conseil', '_blank', 'rel=noopener noreferrer')}>Programmer un rendez-vous
                                    </Button>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Strategy