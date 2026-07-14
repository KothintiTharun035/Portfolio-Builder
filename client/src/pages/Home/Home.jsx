import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Showloading, HideLoading, SetPortfolioData } from '../../redux/rootSlice';
import API from '../../api/api';

import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import FooterPortfolio from "../../components/FooterPortfolio";
import Leftsider from './Leftsider';
import Educations from './Education';

const Home = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { userId } = useParams();

  const getPortfolioData = useCallback(async () => {
    try {
      dispatch(Showloading());
      const res = await API.get(`/api/get-portfolio-data/${userId}`);
      dispatch(SetPortfolioData(res.data));
      dispatch(HideLoading());
    } catch (error) {
      console.error(error);
      dispatch(HideLoading());
    }
  }, [dispatch, userId]);

  useEffect(() => {
  if (userId) {
    getPortfolioData();
  }
}, [userId, getPortfolioData]);

// Changes browser tab title when portfolio data is loaded
useEffect(() => {
  if (portfolioData?.intros?.firstName) {
    document.title = `${portfolioData.intros.firstName}'s Portfolio`;
  } else {
    document.title = "My Portfolio";
  }

  // Restore default title when leaving this page
  return () => {
    document.title = "Portfolio Builder";
  };
}, [portfolioData]);

  return (
    <>
  <div className="shadow-a fixed w-full z-50">
    <Header displayAll />
  </div>

  {portfolioData && (
    <div className="bg-[#0B1120] min-h-screen overflow-x-hidden text-white">

      <Leftsider />

      <main className="pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 sm:px-5">

        <Intro />
        <About />
        <Educations />
        <Experiences />
        <Projects />
        <Contact />
</div>
      </main>
      

      <FooterPortfolio />

    </div>
  )}
</>
  );
};

export default Home;
