import Button from "../../components/button/button";
import React from 'react';
import Accordion from "../../components/accordion/accordion";

const Fiche = () => {

    const details = [
        {
            'nom': 'Boite de vitesse',
            'valeur': 'Manuel'
        },
        {
            'nom': 'Cylindre',
            'valeur': '8'
        },
        {
            'nom': 'Type de moteur',
            'valeur': 'Combustion'
        },
        {
            'nom': 'Moteur',
            'valeur': 'Mercedes-benz V8'
        },
        {
            'nom': 'Puissance',
            'valeur': '200 ch'
        },
        {
            'nom': 'Kilometrage',
            'valeur': '200 km'
        },
        {
            'nom': 'Carburant',
            'valeur': 'Essence'
        },
        {
            'nom': 'Configuration',
            'valeur': 'En ligne'
        },
        {
            'nom': 'Consomation',
            'valeur': '5 L/km'
        },
        {
            'nom': 'Capacite reservoir',
            'valeur': '50 L'
        }
    ]

    return (
        <div style={{
            marginLeft: '50px',
            marginRight: '50px',
        }}>
            <div className="fiche">
                <div className="fiche__img">
                    <img src="Clint419.jpg" alt="" srcset="" />
                </div>
                <div className="fiche__info">
                    
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    
                    
                    <div className="fiche__info__modele">
                        Maybach Virgil Abloh Edition
                    </div>
                    <div className="fiche__info__marque">
                        Mercedes-benz
                    </div>
                    <div className="fiche__info__categorie">
                        SUV
                    </div>
                    <div className="fiche__info__date">
                        02/03/2024
                    </div>
                    <div className="fiche__info__value">
                        <div className="fiche__info__value__prix">
                            100.000.000 Ar
                        </div>
                        <div className="fiche__info__value__prix">
                            Bonne etat
                        </div>
                    </div>
                    <div className="fiche__info__description">
                        Une bière blonde légèrement dorée et rafraîchissante. L'arôme du pain est soutenu en fond par des notes florales de houblon. Le goût du malt est léger, mais riche, et à la fin il y a une amertume végétale agréable et à peine perceptible.
                    </div>

                    <div className="fiche__info__couleur">
                        <span></span>
                    </div>

                    
                    <div className="fiche__info__detail">

                        <Accordion 
                            title={'A propos de la voiture'}
                            items={details}
                            id={'nom'}
                            value={'valeur'} 
                        />
                        <Accordion 
                            title={'Autre détails'} 
                            items={[{
                                nom: 'Portiere',
                                valeur: '4'
                            }]}
                            id={'nom'} 
                            value={'valeur'} 
                        />
                    </div>


                    <div className="fiche__info__button">
                        <Button name={'Contacter'} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Fiche;