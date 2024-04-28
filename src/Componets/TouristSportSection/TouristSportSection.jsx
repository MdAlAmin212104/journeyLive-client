import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayAllSportText from '../DisplayAllSportText/DisplayAllSportText';

const TouristSportSection = () => {
      const [card, setCard] = useState([])
      useEffect(() => {
            fetch('https://tourism-management-server-steel.vercel.app/sport', {
                  method: 'GET',
            })
                  .then(res => res.json())
                  .then(data => {
                        const loadedCard = data.slice(0, 6)
                        setCard(loadedCard);
                  })
      }, [])
      return (
            <div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-12'> 
                  {
                        card.map(sport => <DisplayAllSportText key={sport._id} sport={sport} />)
                  }
                  
                  </div>

                  <div className='flex justify-center'>
                        <Link to='/touristsSpot' className='btn btn-primary my-12'>See All</Link>
                  </div>
            </div>
      );
};

export default TouristSportSection;