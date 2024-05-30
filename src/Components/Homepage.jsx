import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Homepage.css';

function Homepage() {
    useEffect(() => {
        const nextButton = document.querySelector('.swiper-button-next');
        const prevButton = document.querySelector('.swiper-button-prev');

        const addHoverClass = (e, button) => {
            const rect = button.getBoundingClientRect();
            const proximity = 50; 

            if (
                e.clientX > rect.left - proximity &&
                e.clientX < rect.right + proximity &&
                e.clientY > rect.top - proximity &&
                e.clientY < rect.bottom + proximity
            ) {
                button.classList.add('hover');
            } else {
                button.classList.remove('hover');
            }
        };

        const handleMouseMove = (e) => {
            addHoverClass(e, nextButton);
            addHoverClass(e, prevButton);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='img12'>
            <div className='movie-images'>
                <Swiper className='swiper-icon'
                    spaceBetween={70}
                    slidesPerView={7}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide><div className='img-container first-slide'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1287/1715914641287-v" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6252/1716293606252-i" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4819/1714983254819-v" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9678/1715930209678-v" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4517/1715415404517-v" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7340/1714178077340-i" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/891/1714740350891-v" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/215/1714559450215-v" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6024/1714890756024-i" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5128/1714219095128-i" alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='img-container'><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7593/1527593-i-c5046aeb1b81" alt="" /></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Homepage;
