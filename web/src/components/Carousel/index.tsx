'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CarouselCard } from '../CarouselCard';
import { carouselData } from '@/utils/carousel.data';

import './style.css';

export function Carousel() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      breakpoints={{
        810: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
    >
      {carouselData.map((slide, index) => (
        <SwiperSlide key={index}>
          <CarouselCard
            image={slide.image}
            category={slide.category}
            description={slide.description}
            href={slide.href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
