import React from 'react';
import { CiDiscount1 } from "react-icons/ci";
import { FaMapLocationDot, FaVirusCovid } from "react-icons/fa6";
import { MdPayment } from 'react-icons/md';

const MoreInformation = () => {
      return (
            <div className='grid lg:grid-cols-4 md:grid-cols-2 bg-[#00000047] rounded-3xl py-8'>
                  <div className='bg-white m-4 p-4 rounded-xl roboto'>
                        <CiDiscount1 className='text-5xl bg-[#EBF0FE] p-2 rounded'/>
                        <h2 className='text-xl font-bold mt-4'>Get Best Prices</h2>
                        <p>Pay through our application and save thousands and get amazing rewards </p>
                  </div>
                  <div className='bg-white m-4 p-4 rounded-xl roboto'>
                        <FaVirusCovid className='text-5xl bg-[#EBF0FE] p-2 rounded'/>
                        <h2 className='text-xl font-bold mt-4'>Covid Safe</h2>
                        <p>We have all the curated hotels that have all the precaution for a corvid safe environment</p>
                  </div>
                  <div className='bg-white m-4 p-4 rounded-xl roboto'>
                        <MdPayment className='text-5xl bg-[#EBF0FE] p-2 rounded'/>
                        <h2 className='text-xl font-bold mt-4'>Flexible Payment</h2>
                        <p>Enjoy the flexible payment through our app and get rewards on every payment </p>
                  </div>
                  <div className='bg-white m-4 p-4 rounded-xl roboto'>
                        <FaMapLocationDot className='text-5xl bg-[#EBF0FE] p-2 rounded'/>
                        <h2 className='text-xl font-bold mt-4'>Find The Best Near You</h2>
                        <p>Find the best hotels and places to visit near you in a single click</p>
                  </div>
                 
                  
            </div>
      );
};

export default MoreInformation;