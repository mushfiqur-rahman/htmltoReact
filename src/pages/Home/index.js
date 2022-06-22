import React from 'react'
import About from '../../components/About';
import Banner from "../../components/Banner";
import Clients from '../../components/Clients';
import Pricing from '../../components/Pricing';
import Services from '../../components/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <Services/>
      <About/>
      <Clients/>
      <Pricing/>
    </>
  )
}

export default Home