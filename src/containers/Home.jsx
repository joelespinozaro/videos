import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <h1>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista" videos={initialState.mylist} />
      )}
      <Categories title="Tendencias" videos={initialState.trends} />
      <Categories
        title="Originales"
        videos={initialState.originals}
      />
    </h1>
  );
};

export default Home;
