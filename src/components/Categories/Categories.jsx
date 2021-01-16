import React from 'react';
import Carousel from './Carousel';
import './Categories.scss';

export const Categories = ({ title, videos, isList }) => (
  <div className="Categories">
    <h3 className="categories__title">{title}</h3>
    <Carousel videos={videos} isList={isList} />
  </div>
);

export default Categories;
