import React from "react";
import { myProjects } from "../data";

import { Swiper, SwiperSlide} from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../swiper.css';

// import {Autoplay, Pagination} from 'swiper'



const ProyectSlider = () => {

    
    return(
        <>
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{delay: 3500, disableOnInteraction: true}}
      pauseOnMouseEnter 
      className="mySwiper"
        >
            {myProjects.map((item, index) =>{
                const {image, name, description, technologies } = item;
                return <SwiperSlide key={index}>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                        <div className="w-48 h-28 lg:w-[978px]">
                            <img className="rounded-2x1" src={image} alt="proyect" />
                        </div>
                        <div className="flex flex-col max-w-3x1">
                            <h5 className="section-title text-2x1 lg:text-3xl mb-8 italic">{name}</h5>
                            <div>
                                <p className="text-lg lg:text-lg text-fondo">{description}</p>
                            </div>
                            <div><p className="font-body text-2x1 mb-8 italic font-normal py-5 text-rose">{technologies.join(" | ")}</p></div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
        </>
    )
}

export default ProyectSlider;