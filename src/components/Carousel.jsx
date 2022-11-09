import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import CarouselProduct from './CarouselProduct';
import React from 'react';
import { Context } from '../utils';

export default function Carousel() {

    const context = React.useContext(Context)

    return (
        <Swiper
            slidesPerView={1}
            className='carousel'
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            breakpoints={{ 800: { slidesPerView: 2 } }}
        >
            {/* {context.state && (
                context.state.products.map(p => (
                    p._source.featured == 2 ? (
                        <SwiperSlide className='carouselSlide'>
                            <CarouselProduct product={p} />
                        </SwiperSlide>
                    ) : (<></>)
                ))
            )} */}
        </Swiper>
    );
};
