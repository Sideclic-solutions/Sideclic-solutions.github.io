// custom style
import './mission.css';
import { missionShape } from '../../assets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Mission = () => {

        // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return (
        <>
               <Helmet>
                <title>Sideclic – Notre mission </title>
                <meta name='description' content=' Nous mettons à votre service une équipe d’experts pour vous accompagner durant toutes
                 les phases de la mise en place de votre projet digital. ' />
                <link rel='canonical' href='/mission' />
            </Helmet>
       
        <div className='mission d-flex  align-items-center'>
            <div className='me-2 missionshape'>
                <img src={missionShape} style={{maxWidth:"100%"}}  alt='shape' />
            </div>
            <div className='mission-container'>
                <div>
                    <h2 className='mission-title'>Notre mission</h2>
                    <p className='mission-quote'>
                        "Nous mettons à votre service une équipe d’experts pour vous accompagner<br></br>
                        durant toutes les phases de la mise en place de votre projet digital"
                    </p>
                    <p className='mission-description'>Cher client,<br></br>
                        Nous avons conscience qu’être autoentrepreneur c’est être en mesure d’endosser plusieurs casquettes à la fois <br></br> (chef d’entreprise, comptable, responsable marketing, community manager, etc.). <br></br>
                        Ça implique également de posséder le pouvoir de se démultiplier, à l’instar des super-héros, pour être un petit peu <br></br>partout en même temps. <br></br>
                        Mais même les superhéros ont besoin d’un acolyte pour les assister dans leurs missions. <br></br>
                        Chez Sideclic, nous mettons à votre service non pas un acolyte, mais toute une équipe d’experts dont le seul <br></br>objectif est de vous accompagner pour mener à bien la mise en place de votre projet web ou/et digital. <br></br>
                        Nous estimons qu’il ne devrait pas y avoir de discrimination basée sur les budgets des clients. L’accès à une  <br></br>présence en ligne doit être universel et sa qualité ne devrait pas en pâtir pour des raisons financières.<br></br>
                        <br></br>
                        Par contre, nous pouvons garantir que nous ferons tout notre possible pour vous fournir un service sur-mesure, aligné avec vos objectifs commerciaux. <br></br>Nous nous engageons à tout mettre en œuvre pour vous satisfaire et vous accompagner de la meilleure des manières.<br></br>
                        C’est ce souci de transparence que vous retrouverez durant toutes les étapes de notre collaboration. <br></br>Cette relation de confiance que nous souhaitons établir nous tient à cœur et représente l’assise sur laquelle nous édifions notre réputation. <br></br>
                        Nos offres sont étudiées pour répondre précisément à votre besoin et aux spécificités de votre secteur d’activité.<br></br>
                        C’est grâce à vos retours que nous continuons de nous améliorer pour vous offrir des prestations à la hauteur de vos attentes.<br></br>
                    </p>
                </div>
                <div className='d-flex container justify-content-end mt-5'>
                    <h5 className='signature'>Sideclic</h5>
                </div>
            </div>
        </div>

        </>
    )
}

export default Mission
