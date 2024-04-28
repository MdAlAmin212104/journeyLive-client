import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';

const Root = () => {
      const navigation = useNavigation()


      
      


      return (
            <div className={`container mx-auto`}>
                  <Navbar />
                  {
                        navigation.state === 'loading' ? <span className="loading loading-dots loading-lg"></span>: <Outlet />
                  }
                  
                  <Footer/>
            </div>
      );
};

export default Root;