import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Card = ({id, images, modele, marque, categorie, lieu, date, prix}) => {
    return (
        <div className="card-product">
            <Link to={`/fiche/${ id }`}>
                <div className="card-product__img">
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
                    {images.map((image) => {
                        return (
                            <SwiperSlide><img src={ "data:image/png;base64," + image.bytes } width='100%' alt="Not found" /></SwiperSlide>
                        );
                    })}
                </Swiper>
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
            </Link>
        </div>
    );
}

export default Card;