import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllSport from '../../Componets/DisplayAllSport/DisplayAllSport';

const AllTouristsSpot = () => {

      const allTouristsSpot = useLoaderData();
      const [sport, setSport] = useState(allTouristsSpot);
      
      return (
            <div className='grid md:grid-cols-2 gap-4 mt-4'>
                  {
                        sport.map(sport => <DisplayAllSport key={sport._id} sport={sport} />)
                  }
            </div>
      );
};

export default AllTouristsSpot;