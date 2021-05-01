import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { getCourseDataThunk } from './api/api';
import { setSelectedCurrency } from './redux/actions/courseData';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import CurrencyList from './pages/CurrencyList/CurrencyList';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCourseDataThunk());
  }, [dispatch]);

  const {
    coursesData,
    selectedCurrency,
    isLoading
  } = useSelector(({ getCourseData }) => getCourseData);

  useEffect(() => {
    dispatch(setSelectedCurrency(coursesData[0]));
  }, [coursesData, dispatch]);

  const handleSelectedCurrency = (e) => {
      const selectedValue = e.target.value;

      const handleSelectedCurrency = coursesData.filter((elem) => {
          if (elem.CharCode === selectedValue) return elem;
          return undefined;
      });

      dispatch(setSelectedCurrency(...handleSelectedCurrency));
  };

  return (
    
    <div className="app">
      <Header />
        {
          isLoading 
          ? <Preloader />
          : <article><Route path='/' exact render={() =>
              <Redirect 
                to='/list'
              />
            } />
            <Route path='/List' render={() =>
              <CurrencyList 
                coursesData={coursesData} 
                handleSelectedCurrency={handleSelectedCurrency} 
                selectedCurrency={selectedCurrency} 
              />
            } />
            <Route path='/Converter' render={() =>
              <CurrencyConverter 
                coursesData={coursesData}
                selectedCurrency={selectedCurrency}
              />
            } />
          </article>
        }
      <Footer />
    </div>
  );
}

export default App;