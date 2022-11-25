import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import React from 'react';

export default function Carousel() {

    return (
        <Swiper
            slidesPerView={1}
            className='carousel'
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            breakpoints={{ 800: { slidesPerView: 2 } }}
        >
            {context.state && (
                context.state.products.map(p => (
                    p._source.featured == 2 ? (
                        <SwiperSlide className='carouselSlide'>
                            <div className='carouselProduct'>
                                <a
                                    onClick={() => sendClickInfo(p._source.provider)}
                                    href={p._source.link}
                                >
                                    <img className="carouselProductImage" src={p._source.imageLink} alt="img" />
                                    <div className="carouselProductDiscount">{p._source.discount}% de descuento</div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ) : (<></>)
                ))
            )}
        </Swiper>
    );
};
