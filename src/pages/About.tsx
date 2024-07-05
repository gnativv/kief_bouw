import React from 'react';
import Header from '../components/Header.tsx';
import BestaatNiet from '../components/bestaatniet.tsx';
import Footer from '../components/Footer.tsx';


const About: React.FC = () => {
  return (
    <div>
      <Header/>
      <BestaatNiet/>
      <Footer/>
    </div>
  );
}

export default About;
