import Button from "../../components/button/Buttons";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from "../../components/accordion/Accordions";
import { getList } from "../../services/crud";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Fiche = () => {
 
    const [error, setError] = useState('');
    const [annonce, setAnnonce] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getList(`annonces/${id}`)
        .then((response) => {
            setAnnonce(response.data.data.annonce);
            console.log(response.data.data.annonce);
        }).catch(error => {
            if (error.response) {
                setError(error.response.data.errors);
            }
        });
    }, []);
    
    let fiche = (<div></div>);
    
    let details = [];
    if (annonce != null) {
        console.log(annonce);
        details = [
            {
                'nom': 'Boite de vitesse',
                'valeur': annonce.voiture.moteur.vitesses[0].nom
            },
            {
                'nom': 'Cylindre',
                'valeur': annonce.voiture.moteur.cylindre
            },
            {
                'nom': 'Type de moteur',
                'valeur': annonce.voiture.moteur.type.nom
            },
            {
                'nom': 'Moteur',
                'valeur': annonce.voiture.moteur.nom
            },
            {
                'nom': 'Puissance',
                'valeur': annonce.voiture.moteur.puissance + ' ch'
            },
            {
                'nom': 'Kilometrage',
                'valeur':  annonce.voiture.kilometrage + ' km'
            },
            {
                'nom': 'Carburant',
                'valeur': annonce.voiture.moteur.carburant.nom
            },
            {
                'nom': 'Configuration',
                'valeur': annonce.voiture.moteur.configuration
            },
            {
                'nom': 'Consomation',
                'valeur': annonce.voiture.moteur.consommation + ' L/km'
            },
            {
                'nom': 'Capacite reservoir',
                'valeur': annonce.voiture.moteur.capacite + ' L'
            }
        ];
        fiche = (
            <div style={{
                marginLeft: '50px',
                marginRight: '50px',
            }}>
                <div className="fiche">
                    <div className="fiche__img">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {annonce.photos.map((image) => {
                                return (
                                    <SwiperSlide><img src={ "data:image/png;base64," + image.bytes } alt="Not found" /></SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="fiche__info">
                        
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                        
                        
                        <div className="fiche__info__modele">
                            { annonce.voiture.modele.nom }
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
                                items={annonce.details}
                                id={'caracteristique'} 
                                value={'valeur'}
                                object={true}
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
    return fiche;
}

export default Fiche;