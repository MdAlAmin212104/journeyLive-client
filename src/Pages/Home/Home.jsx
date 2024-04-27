import React from 'react';
import Hero from '../../Componets/Hero/Hero';
import MoreInformation from '../../Componets/MoreInformation/MoreInformation';
import CountrySection from '../../Componets/CountrySection/CountrySection';
import Testimonials from '../../Componets/Testimonials/Testimonials';
import PeopleChoose from '../../Componets/PeopleChoose/PeopleChoose';
import TouristSportSection from '../../Componets/TouristSportSection/TouristSportSection';

const Home = () => {
      return (
            <div>
                  <Hero />
                  <MoreInformation />
                  <CountrySection />
                  <TouristSportSection/>
                  <Testimonials />
                  <PeopleChoose />
                  
            </div>
      );
};

export default Home;