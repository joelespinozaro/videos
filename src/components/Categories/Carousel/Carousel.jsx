import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';
const Carousel = () => (
  <section className="carousel">
    <div className="carousel__container">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
  </section>
);

export default Carousel;
