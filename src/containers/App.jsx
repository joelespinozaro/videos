import React from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories />
    <Footer />
  </div>
);

export default App;
