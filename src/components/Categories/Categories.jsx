import React from 'react';
import Carousel from './Carousel';
import './Categories.scss';

export const Categories = ({ children }) => (
  <div className="Categories">
    <h3 className="categories__title">Mi lista</h3>
    <Carousel />
  </div>
);

export default Categories;
