import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';

const Carousel = ({ videos, isList }) => (
  <section className="carousel">
    <div className="carousel__container">
      {videos &&
        videos.map((video) => (
          <CarouselItem
            key={video.id}
            id={video.id}
            title={video.title}
            year={video.year}
            contentRating={video.contentRating}
            duration={video.duration}
            cover={video.cover}
            isList={isList}
          />
        ))}
    </div>
  </section>
);

export default Carousel;
