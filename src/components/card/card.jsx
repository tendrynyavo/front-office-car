import Button from "components/button/button";

const Card = ({image, modele, marque, categorie, lieu, date, prix}) => {
    return (
        <div className="card-product">
            <div className="card-product__img">
                <img src={ image } width='100%' alt="Not found" />
            </div>
            <div className="card-product__info">
                <div className="card-product__info__modele">
                    { modele }
                </div>
                <div className="card-product__info__marque">
                    { marque }
                </div>
                <div className="card-product__info__categorie">
                    { categorie }
                </div>
                <div className="card-product__info__lieu">
                    { lieu }
                </div>
                <div className="card-product__info__date">
                    { date }
                </div>
                <div className="card-product__info__prix">
                    { prix } Ar
                </div>
            </div>
            <div className="card-product__button">
                <Button name={'Voir detail'} />
            </div>
        </div>
    );
}

export default Card;