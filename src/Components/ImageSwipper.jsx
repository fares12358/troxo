'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function ImageSwipper() {  const slides = [
    '/images/swipper.png',
    '/images/swipper.png',
    '/images/swipper.png',
  ];

  return (
    <div className="hidden md:flex flex-col justify-start items-center bg-red-100 rounded-l-xl w-1/2 max-h-screen p-6 relative overflow-hidden">
      {/* النص العلوي */}
      <p className="text-center text-gray-800 text-lg mb-3 max-w-md leading-relaxed">
        تتبع أداء متجرك من خلال إحصائيات تفاعلية للعملاء والشحن، مما يجعل إدارة
        متجرك بشكل فعال وسهل.
      </p>

      {/* Swiper الصور */}
      <div className="overflow-hidden w-[90%] h-full relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full rounded-xl"
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* تنسيق pagination bullets */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.6;
          margin: 0 4px !important;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: white;
          width: 24px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

