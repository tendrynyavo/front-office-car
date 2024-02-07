import Button from "components/button/button";

const Fiche = () => {

    const onClick = (e) => {
        
    }

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
                    <div className="fiche__info__caracteristique">
                        <h3>A propos de la voiture</h3>
                        <ul>
                            <li>Boite de vitesse : Manuel</li>
                            <li>Carburant : Essence</li>
                        </ul>
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