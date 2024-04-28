import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SortByCost from '../../Componets/SortByCost/SortByCost';
import DisplayAllSportText from '../../Componets/DisplayAllSportText/DisplayAllSportText';

const AllTouristsSpot = () => {

      const allTouristsSpot = useLoaderData();
      const [sport, setSport] = useState(allTouristsSpot);
      console.log(sport);


      const handleBooksFilter = sort => {
            let SortSport = [];
            if (sort === "cost") {
                  SortSport = [...sport].sort((a, b) => b.cost - a.cost);
            } else if (sort === 'rating') {
                  SortSport = [...sport].sort((a, b) => b.rating - a.rating);
            } else if (sort === 'visitors') {
                  SortSport = [...sport].sort((a, b) => b.visitors - a.visitors);
            } else {
                  SortSport = [...sport]; // Default sorting
            }
            setSport(SortSport);
      }
      
      return (
            <div>
                  <div className='text-right'>
                        <SortByCost handleBooksFilter={ handleBooksFilter } />
                  </div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4'>
                        {
                              sport.map(sport => <DisplayAllSportText key={sport._id} sport={sport} />)
                        }
                  </div>
            </div>
      );
};

export default AllTouristsSpot;