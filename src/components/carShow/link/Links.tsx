"use client"

import Link from "next/link";
import styles from "../carShow.module.css";
import Image from "next/image";
import taunus from "../../../../public/Assets/ford-taunus.png";
import mercedes from "../../../../public/Assets/mercedes-benz-300sl.jpg"
import porshe from "../../../../public/Assets/porshe-911-turbo.jpg"
import { useEffect, useState } from "react";

export default function Links() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const brands = [
    {
      name: "Ford Taunus",
      image: taunus,
      path: "/cars",
      description: "Classique intemporel"
    },
    {
      name: "Mercedes 300SL",
      image: mercedes,
      path: "/cars",
      description: "Légende allemande"
    },
    {
      name: "Porsche 911 Turbo",
      image: porshe,
      path: "/cars",
      description: "Performance pure"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [brands.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="carousel-container relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="carousel-track flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {brands.map((brand, index) => (
            <div key={brand.name} className="carousel-slide min-w-full relative">
              <Link href={brand.path} className="block relative group">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="slide-in-right">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-lg md:text-xl text-blue-100 mb-4">
                      {brand.description}
                    </p>
                    <div className="inline-flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                      Découvrir
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}