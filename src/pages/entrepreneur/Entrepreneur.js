import React, { useEffect } from 'react'

import './entrepreneur.css';
import { Button, Container, Row } from 'react-bootstrap';
import { arrow, line1, line2, ngliarr, ok, oki, redline, rightarr, seopic } from '../../assets';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Entrepreneur = () => {

    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Helmet>
                <title>Sideclic – Site vitrine pour auto-entrepreneur </title>
                <meta name='description' content=' un site web de qualité, facilement administrable qui reflète votre image et votre expertise, le tout à un tarif adapté à votre budget. ' />
                <link rel='canonical' href='/site_vitrine' />
            </Helmet>
            <div className='entr-hero-section'>
                <Container >
                    <div>
                        <h1 className='entr-h1'>Site vitrine pour auto-entrepreneur
                        </h1>
                    </div>
                    <div className='mb-5'>
                        <p className='entr-p'>
                            Développez votre présence en ligne     <br></br> avec un site <span className='white-marker'>web de qualité</span> ,
                            <span className='white-marker'>facilement</span>   <br></br> administrable qui <span className='white-marker'> reflète  votre image et votre expertise.</span>
                        </p>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='position-relative'>
                            <h3 className='ruiner'>Le tout sans vous ruiner.
                            </h3>
                            <img className='red-line' src={redline} alt="" />

                            <img className='position-absolute rightarr' src={rightarr} alt="" />

                            <Button className='rightarrbtn position-absolute' onClick={() => window.open('https://calendly.com/sideclic/session_gratuite_de_conseil', '_blank', 'rel=noopener noreferrer')}>
                                Créer mon site vitrine 
                            </Button>
                        </div>

                    </div>
                </Container>
            </div>
            <Container className='percentage-bx'>
                <div>
                    <h3 className='bsn'>
                        Avez-vous vraiment besoin d’un site web ?
                    </h3>
                </div>

                <div className='stats-container mb-5'>
                    <div className='stats-box'>
                        <div className='percentage'>
                            <h2>
                                97 %
                            </h2>

                        </div>
                        <div>
                            <p className='sdiscreption'>des consommateurs utilisent les  <br></br>     moteurs de recherche pour trouver <br></br> une  entreprise locale.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='stats-container-2  mb-5'>
                    <div className='stats-box'>
                        <div className='percentage-2'>
                            <h2>
                                70 %
                            </h2>

                        </div>
                        <div>
                            <p className='sdiscreption'>
                                des consommateurs se rendent sur place <br></br> après avoir consulté les informations de <br></br> l’entreprise en ligne.
                            </p>

                        </div>
                    </div>

                </div>
                <div className='stats-container-3  mb-5'>
                    <div className='stats-box'>
                        <div className='percentage-3 '>
                            <h2>
                                78 %
                            </h2>

                        </div>
                        <div>
                            <p className='sdiscreption'>
                                du total des recherches mobiles locales <br></br> se terminent par un achat en boutique.
                            </p>

                        </div>
                    </div>

                </div>
            </Container>
            <div className='edela-bg'>
                <Container>
                    <p className='pcs'>
                        Au-delà d’un simple vecteur de visibilité <br></br> pour vos produits et/ou services, <span className='bold-text'> un site web pour <br></br> auto-entrepreneur </span> constitue la pièce centrale <br></br> de votre présence en ligne.
                    </p>
                </Container>
            </div>

            <Container className='mb-5'>
                <div className='intenaut'>
                    <h1 className='intenaut-title'>C’est à travers votre site que vous existez aux yeux des internautes.
                    </h1>

                    <div className='intenaut-desc'>
                        <p>Grâce à lui vous pourrez véhiculer <span className='marker-g'> votre image <br></br>  de marque
                            générer des ventes, </span>  <span className='marker-g'>fidéliser vos clients <br></br> entreprendre des campagnes marketing, </span> et bien <br></br>
                            d’autres actions qui vous permettront d’atteindre <br></br> vos objectifs commerciaux en exploitant tout le  <br></br>
                            potentiel de votre activité. </p>
                    </div>
                </div>
            </Container>

            <div className='levier-bg mt-5'>
                <Container>
                    <div>
                        <h3 className='lv-title'>Votre site vitrine constitue un levier <br></br> incontournable de croissance</h3>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-sm-12 col-md-6'>

                            <h4 className='yellow-bg'>
                                Atteignez plus de monde
                            </h4>
                            <div className='levier-boxx'>
                                <p>
                                    Les consommateurs effectuent leurs recherches sur internet <br></br> avant de procéder à l’achat. En étant présent sur les premiers <br></br> résultats de Google, vous serez en mesure d’atteindre plus de <br></br> clients potentiels.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>

                            <h4 className='yellow-bg'>
                                Générez de nouveaux clients
                            </h4>
                            <div className='levier-boxx'>
                                <p>
                                    Plus de visibilité implique plus de visites.  Avec le bon contenu et <br></br> des boutons d’appel à l’action bien étudiés, vous serez en mesure <br></br> de convertir vos prospects en clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <h4 className='yellow-bg'>
                                Fidéliser vos clients
                            </h4>
                            <div className='levier-boxx'>
                                <p>
                                    Le parcours client ne s’arrête pas au moment de l’achat. Un <br></br> client fidèle vous rapporte plus qu’un nouveau client, d’où <br></br>  l’importance de lui <br></br>
                                    proposer une expérience riche et personnalisée sur votre site  <br></br> vitrine pour auto-entrepreneur.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <h4 className='yellow-bg'>
                                Soignez votre image de marque
                            </h4>
                            <div className='levier-boxx'>
                                <p>
                                    Votre image de marque se définit par la représentation que se <br></br>
                                    font les consommateurs de votre entreprise. Votre site web pour <br></br>
                                    auto-entrepreneur doit être le vaisseau qui reflète les éléments <br></br> constitutifs de votre image de marque : Identité visuelle, discours,  <br></br> valeurs, qualité de vos produits /services, crédibilité, savoir-faire…
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <h4 className='yellow-bg'>
                                Positionnez-vous en tant qu’expert
                            </h4>
                            <div className='levier-boxx'>
                                <p>
                                    Votre site web est le meilleur moyen de valoriser votre expertise <br></br>
                                    et de vous positionner en tant que référence dans votre   <br></br>    domaine. Démarquez-vous de votre concurrence en mettant <br></br> en valeur votre savoir-faire et votre proposition de valeur.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <h4 className='yellow-bg'>
                                Gagnez en crédibilité
                            </h4>
                            <div className='levier-boxx'>
                                <p>
                                    En soignant votre contenu et en affichant vos informations sur <br></br> votre site, vous gagnerez la confiance des internautes et    <br></br>          renforcerez votre crédibilité.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>


            </div>
            <Container>
                <div className='mb-4'>
                    <h3 className='seo-title'>
                        Focus sur le SEO local
                    </h3>
                </div>

                <div>
                    <p className='seo-subti'>
                        Nous savons que la plupart des auto-entrepreneurs <br></br>
                        opèrent dans une zone de chalandise précise, d’où <br></br>
                        l’importance du référencement local pour attirer un trafic ciblé.
                    </p>
                </div>
                <div className='row'>
                    <div className='seoartc d-flex'>
                        <div>
                            <img className='seoImg' src={seopic} alt="" ></img>
                        </div>
                        <div>
                            <p className='seo-subti'>Le SEO local sera au centre de votre stratégie de <br></br> référencement. Nous vous aiderons à apparaître sur les <br></br> premiers résultats de recherche des requêtes géo     <br></br>       localisées, en mettant en œuvre un ensemble de     <br></br>   technique testées et approuvées.</p>
                            <ul className='seo-subti'>
                                <li>Optimisation fiche Google my business
                                </li>
                                <li>
                                    Positionnement sur des mots clés pertinents
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='prestation-container'>
                <h2 className='prestation-title'>Nous vous proposons une prestation complète qui <br></br> prend en charge tous les aspects de la création de <br></br>  votre site vitrine pour auto-entrepreneur.
                </h2>
            </Container>

            <div className='d-flex  ngli-bg '>
                <div className='position-relative'>
                    <p className='ngli-p'>
                        Un site vitrine performant doit répondre à un ensemble <br></br>
                        d’exigences <span className='white-marker'> techniques, </span>  <span className='white-marker'>graphiques </span>  et <span className='white-marker'>commerciales </span>  de <br></br>
                        manière à garantir des résultats optimaux. Négliger un <br></br>
                        de ces aspects peut nuire aux performances de votre site <br></br>
                        et compromettre vos objectifs.
                    </p>

                    <img className='ngl-arrow' src={ngliarr} alt="" />


                </div>

            </div>

            <Container className='ngli-gren-line'>
                <div className='d-inline-block'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={line2} style={{ maxWidth: '60%' }} alt="" />
                        <p className='ngli-gren-line-p'>
                            Grâce à l’expertise de notre équipe pluridisciplinaire nous <br></br>
                            prenons en charge la création <strong style={{ fontFamily: 'medium' }}>de votre site vitrine avec   <br></br> Wordpress </strong>  de A jusqu’à Z pour un résultat final conforme à
                            <br></br>
                            vos attentes et en total adéquation avec vos objectifs.
                        </p>
                    </div>
                </div>
            </Container>


            <div className='services-main-cnt'>
                <div className='h-bg '>
                    <div className='container'>
                        <h2 className='services-main-title'>Rien ne sera laissé au hasard ! </h2>
                    </div>

                </div>
                <Container>


                    <Row>
                        <div className='col-md-6 services-cnt'>
                            <ul>
                                <li>
                                    Rédaction du cahier des charges
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Benchmark
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Conception, création d’une maquette fonctionnelle <br></br> et    structuration de l’arborescence du site
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>

                                <li>
                                    Développement et intégration sur un template  <br></br>     Wordpress de votre choix
                                    <img style={{ width: '35px' }} src={ok} alt="" />

                                </li>
                                <li>
                                    Rédaction d’un contenu pertinent pour votre cible et <br></br>  optimisé pour les moteurs de recherches
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Optimisations SEO
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Acquisition du nom de domaine
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Hébergement gratuit pendant 1 an
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Connexion à Google analytics, Google search console <br></br>  et intégration du pixel Facebook
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Création et/ou optimisation de votre fiche <br></br>  d’établissement Google
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Création de la charte graphique et conception du logo <br></br>  (sur demande du client)
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                                <li>
                                    Conception graphique et optimisations UI/UX
                                    <img style={{ width: '35px' }} src={ok} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-center'>
                            <div>
                                <h3 className='hauteur-att'>Des sites web à la hauteur de vos attentes et de votre budget.
                                </h3>
                                <Container className='ngli-gren-line'>
                                    <div className='d-inline-block'>
                                        <div className='d-flex justify-content-center align-items-center flex-column'>
                                            <img src={redline} style={{ maxWidth: '60%' }} alt="" />
                                            <p className='ngli-gren-line-p'>
                                                Toutes les prestations peuvent bénéficier <br></br>
                                                d’une personnalisation poussée pour <br></br> répondre au mieux à votre besoin.

                                            </p>
                                            <Button className='rightarrbtn' onClick={() => window.open('https://calendly.com/sideclic/session_gratuite_de_conseil', '_blank', 'rel=noopener noreferrer')}>
                                                Programmer une session gratuite de consulting stratégique
                                            </Button>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='prositwbe-bg'>
                <div className='container prositwbe-container'>
                    <div className='d-flex align-items-center flex-column'>
                        <h3 className='prositwbe'>
                            Un processus dans lequel vous êtes acteur pour un <br></br> résultat final qui répond parfaitement à vos attentes.
                        </h3>
                        <p className='prositwbe-p'>Vous serez au cœur du processus de création de votre site web. Dès la    réception de votre
                            <br></br>
                            demande vous serez pris en charge par un chef de projet qui transmettra vos besoins à notre   <br></br> équipe de production. Nous solliciterons vos retours et vos         remarques durant les différentes  <br></br> phases de développement afin     d’assurer un résultat final conforme à vos attentes. </p>
                    </div>
                </div>
            </div>



            <div className='servicesPen-bg'>
                <div className='container servicesPen-bg-container'>
                    <div>
                        <h3 className='servicesPen-bg-title'>
                       Nos services sont imaginés, pensés et conçus pour vous. <br></br> Nos tarifs le sont aussi.
                        </h3>
                        <ul className='ul-servicesPen'>
                            <li> <img src={oki} alt="" />    Facilité de paiement </li>
                            <li> <img src={oki} alt="" /> Vous ne paierez la totalité du montant <br></br> qu’une fois le site validé et mis en ligne. </li>
                            <li>
                                <img src={oki} alt="" />
                                Parrainez quelqu’un et recevez une <br></br> remise de 15 % sur votre prestation.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='rdv-ssg'>
                    <h3>Vous souhaitez en savoir plus ?
                    </h3>
                    <img className='line1' src={line1} style={{ maxWidth: "100%" }} alt="" />
                    <div>
                        <p className='mb-0 rdv-ssg-p '>Programmez une session
                            d’accompagnement gratuite avec l’un de nos conseillers.
                        </p>
                        <div className='d-flex rdv-ssg-btn prdv'>
                            <Button className='rdv-btn' onClick={() => window.open('https://calendly.com/sideclic/session_gratuite_de_conseil', '_blank', 'rel=noopener noreferrer')}>Prendre rendez-vous pour une session gratuite de conseil
                            </Button>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Entrepreneur
