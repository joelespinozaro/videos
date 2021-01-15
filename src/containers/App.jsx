import React, { useEffect, useState } from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer/Footer';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist && videos.mylist.length > 0 && (
        <Categories title="Mi lista" videos={videos.mylist} />
      )}
      <Categories title="Tendencias" videos={videos.trends} />
      <Categories title="Originales" videos={videos.originals} />
      <Footer />
    </div>
  );
};

export default App;
