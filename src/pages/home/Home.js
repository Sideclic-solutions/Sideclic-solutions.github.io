
import { Button, Container } from 'react-bootstrap';
import './home.css';
import { bigwarr, choicearr, one, two, wline } from '../../assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';




const Home = () => {

    const navigate = useNavigate();
    // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <>
        <Helmet>
            <title>Sideclic – L’agence web des auto-entrepreneurs </title>
            <meta name='description' content=' Création de sites web et social media management pour les auto-entrepreneurs à des tarifs spécialement étudiés pour votre budget. ' />
            <link rel='canonical' href='/'/>
        </Helmet>
            <Container className="intro">
                <div>
                    <h1>
                        L’agence web des auto-entrepreneurs.
                    </h1>
                   <h1> Des services web imaginés, pensés et conçus pour les auto-entrepreneurs. </h1>
                </div>
                <div className='d-flex  toend session-btn-container'>
                    <Button onClick={()=> window.open('https://calendly.com/sideclic/session_gratuite_de_conseil','_blank', 'rel=noopener noreferrer')}>Session gratuite de conseil</Button>
                </div>
            </Container>
            <div className='why-section-bg'>
                <Container className='why-section '>
                    <div>
                        <h3>Pourquoi créer une agence web <br></br> dédiée  aux auto-entrepreneurs ?</h3>
                        <p>
                            De la persévérance, une bonne <br></br> dose de patience  et beaucoup de <br></br>  dévouement:  <br></br>
                            Ces qualités inhérentes aux <br></br> auto-entrepreneurs sont <br></br>
                            indispensables pour faire face aux <br></br>  épreuves   quotidiennes de  <br></br>
                                l’entreprenariat.
                        

                        </p>
                    </div>
                    <div className='d-flex left-it center-it '>
                        <div className='position-relative'>
                            <div>
                                <img className='position-absolute big-arr' src={bigwarr} alt="" />

                            </div>
                            <img src={wline} style={{ maxWidth: '100%' }} alt="" />
                            <p>
                                Elles sont d’autant plus importantes lorsque <br></br> vous décidez de faire appel à une agence <br></br> pour prendre en charge la création de votre  <br></br> site web et que vous vous retrouvez face à ces <br></br>

                                <span className='white-marker'> 2 possibilités</span>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='steps-container '>
                <div className='d-flex  stepone'>
                    <div className=' number'>
                        <img src={one} alt="" />
                    </div>
                    <div>
                        <p>
                            Dépenser des sommes largement au-<br></br>
                            dessus  de  votre  budget  tout en ayant <br></br>  à payer des extras
                            pour des  <br></br> prestations qui en principe,
                            <br></br>devraient être incluses dans l’offre initiale.
                        </p>
                    </div>
                </div>
                <div className='d-flex  steptwo  '>
                    <div className=' number'>
                        <img src={two} alt="" />
                    </div>
                    <div>
                        <p>
                            Payer pour une prestation relativement <br></br> abordable, qui toutefois est remplie de <br></br> conditions cachées qui font très vite <br></br>
                            exploser la note, pour vous retrouver <br></br> en fin de compte avec un site web <br></br>
                            basique, très loin de vos attentes.
                        </p>
                    </div>
                </div>
            </div>
            <Container className='dilmm-container'>
                <h3 className='dilmm'>      Ce dilemme n’est plus acceptable !</h3>
                <h3 className='dilmm-p'>Ce que nous vous proposons <br></br> à la place ?
                </h3>
            </Container>
            <div className='choice-section-bg'>
                <Container className='choice-container'>
                    <div className='d-flex  toend'>
                        <div className='position-relative'>
                            <h3>Le choix.
                            </h3>
                            <img className='position-absolute choicearr' src={choicearr} alt="" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center choice-desc'>
                        <h4>Le choix de bénéficier d’une    <span className='white-marker'>prestation</span>  <br></br>    <span className='white-marker'>sur mesure</span> , spécifiquement adaptée à <br></br>  <span className='white-marker'>votre besoin </span> et à <span className='white-marker'> votre budget.</span>

                        </h4>
                    </div>
                    <div className='entreprneur-container'>
                        <h3 className='entrp'>
                            Un site web type pour auto-entrepreneur <span style={{ fontFamily: 'regular' }}>n’existe pas ! </span>
                        </h3>
                    </div>
                </Container>
            </div>
            <Container className='prestation-container'>
                <div>
                    <p>
                        Au lieu de vous proposer des packs  <br></br> préconçus, nous vous permettons
                        <br></br> de personnaliser votre prestation  <br></br> au gré de vos besoins et
                        <span className='green-marker'>  sans frais  <br></br> supplémentaires.  </span>
                    </p>
                </div>
                <div className='d-flex  toend'>
                    <div>
                    <Button className='rdvv-btn' onClick={()=> window.open('https://calendly.com/sideclic/session_gratuite_de_conseil','_blank', 'rel=noopener noreferrer')}>Je prends rendez-vous pour une session de conseil.
                    </Button>
                    </div>
               
                </div>
            </Container>
            <Container className='figuration-container'>
                <h2> Arrêtez de faire de la figuration sur les <br></br> réseaux sociaux !
                </h2>
                <p>
                    Nos experts en social media <br></br>
                    management vous accompagnent <br></br>
                    pour tirer le meilleur parti de votre <br></br>
                    <span className='green-marker'> <Link style={{ textDecoration: 'none',color:'#47aea9' }} to={'/social_media_management'}>présence sur les réseaux sociaux.</Link>  </span>
                </p>
                <div className='d-flex   toend'>
                    <Button className='svr-btn'
                    onClick={()=> navigate('/social_media_management')}
                    >
                 En savoir plus
                        </Button>
                </div>
            </Container>
            <div className='audit-bg'>
                <Container className='audit-container'>
                    <div>
                        <ul>
                            <li>Un audit de votre présence sur les réseaux sociaux.</li>
                            <li>La mise en place d’une stratégie Social Media  <br></br>
                                <span className='pe-4'>   </span> adaptée à   vos besoins.</li>
                            <li>
                                Le déploiement  d’un plan d’action.
                            </li>
                            <li>
                                La création de contenu original à forte valeur <br></br>  <span className='pe-4'></span> ajoutée pour votre cible.
                            </li>
                            <li>
                                Un reporting régulier des résultats générés <br></br>  <span className='pe-4'></span> par nos actions.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='rch3'>Vous souhaitez gérer vous-même vos <br></br> réseaux sociaux ? </h3>
                        <p className='opt'>Optez pour notre <span className='red-markerr'> prestation clé en main.  </span> </p>
                    </div>
                </Container>
            </div>
            <Container className='d-flex toend services-c'>
                <p>Ce service vous permet de bénéficier   <br></br>
                    <span className='marker-g'>  d’une stratégie social media  management   <br></br>
                        sur-mesure </span> ainsi que de
                    deux sessions de <br></br> formation avec l’un de  <span className='marker-g'> nos experts en </span> <br></br>  <span className='marker-g'> réseaux sociaux.</span>
                </p>
            </Container>
            <Container className='figuration-container'>
                <h3>Ce serait dommage de partir <br></br> sans qu’on ait    l’occasion de discuter.

                </h3>
                <p>
                    Remplissez le formulaire de contact ou prenez <br></br>  directement rendez-vous avec notre conseiller <br></br>  en
                    cliquant sur ce lien.
                </p>
                <div className='d-flex   toend'>
                    <Button className='svr-btn' onClick={()=> window.open('https://calendly.com/sideclic/session_gratuite_de_conseil','_blank', 'rel=noopener noreferrer')}>Prendre rendez-vous </Button>
                </div>
            </Container>
        </>

    )
}

export default Home
