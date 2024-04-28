import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import DisplayAllSportText from '../DisplayAllSportText/DisplayAllSportText';

const FindCountry = () => {
      const country = useLoaderData()
      console.log(country);
      return (
            <div>
                  <Hero/>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {
                              country.map(sport => <DisplayAllSportText key={sport._id} sport={sport} />)
                        }
                  
                  </div>
            </div>
      );
};

export default FindCountry;