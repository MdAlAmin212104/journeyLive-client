import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';

const Root = () => {
      return (
            <div className='container mx-auto'>
                  <Navbar/>
                  <Outlet />
                  <Footer/>
            </div>
      );
};

export default Root;