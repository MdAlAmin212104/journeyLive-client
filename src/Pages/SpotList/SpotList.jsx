import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
//import ListSport from '../../Componets/ListSport/ListSport';
import DisplayAllSport from '../../Componets/DisplayAllSport/DisplayAllSport';

const SpotList = () => {
      const [userSport, setUserSport] = useState([])
      const { user } = useContext(AuthContext)


      useEffect(() => {
            fetch(`https://tourism-management-server-steel.vercel.app/sportByEmail/${user?.email}`, {
                  method: 'GET',
            })
                  .then(res => res.json())
                  .then(data => {
                        setUserSport(data);
                  })
      }, [])


      return (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                  {
                        userSport.map(sport => <DisplayAllSport key={sport._id} sport={sport} />)
                  }
            </div>
      );
};

export default SpotList;