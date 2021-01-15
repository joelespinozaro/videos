import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';

const Carousel = ({ videos }) => (
  <section className="carousel">
    <div className="carousel__container">
      {videos &&
        videos.map((video) => (
          <CarouselItem key={video.id} video={video} />
        ))}
    </div>
  </section>
);

export default Carousel;
