import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Header from '../components/Header';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi lista" videos={myList} isList />
      )}
      <Categories title="Tendencias" videos={trends} />
      <Categories title="Originales" videos={originals} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
