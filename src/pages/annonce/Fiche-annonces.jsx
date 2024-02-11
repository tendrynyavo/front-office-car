import Button from "../../components/button/Buttons";
import React, { useEffect, useState, useParams } from 'react';
import Accordion from "../../components/accordion/Accordions";
import { getList } from "../../services/crud";

const Fiche = () => {
 
    const [error, setError] = useState('');
    const [annonce, setAnnonce] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getList(`annonces/${id}`)
        .then((response) => {
            setAnnonce(response.data.data.annonce);
        }).catch(error => {
            if (error.response) {
                setError(error.response.data.errors);
            }
        });
    }, []);

    const details = [
        {
            'nom': 'Boite de vitesse',
            'valeur': annonce.voiture.vitesses[0].nom
        },
        {
            'nom': 'Cylindre',
            'valeur': annonce.voiture.cylindre
        },
        {
            'nom': 'Type de moteur',
            'valeur': annonce.modele.moteurs[0].type.nom
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
                    
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    
                    
                    <div className="fiche__info__modele">
                        { annonce.modele }
                    </div>
                    <div className="fiche__info__marque">
                        { annonce }
                    </div>
                    <div className="fiche__info__categorie">
                        { annonce.voiture.categorie.nom }
                    </div>
                    <div className="fiche__info__date">
                        { annonce.date }
                    </div>
                    <div className="fiche__info__value">
                        <div className="fiche__info__value__prix">
                            { annonce.prix } Ar
                        </div>
                        <div className="fiche__info__value__prix">
                            { annonce.valeur }
                        </div>
                    </div>
                    <div className="fiche__info__description">
                        { annonce.description }
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