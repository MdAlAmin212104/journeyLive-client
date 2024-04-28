import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const SingleSportUser = () => {
      const singleSport = useLoaderData();
      const { name, countryName, location, seasonality, time, cost, visitors, rating, photo, desc, userName, userPhoto } = singleSport;
      const navigate = useNavigate()
      
      
      
      return (
            <div className="card bg-base-100 shadow-xl poppins ">
                  <figure className=''><img src={photo} alt="Shoes" className='w-full max-h-[600px]' /></figure>
                  <div className='flex justify-between m-6 text-xl font-bold'>
                        <p>{countryName}</p>
                        <p>{time}</p>
                  </div>
                  <div className="card-body">
                  <h2 className="card-title text-4xl font-semibold">{name}</h2>
                        <p>{desc}</p>
                        <div className='flex justify-around text-bold mt-8'>
                              <p>Location : {location}</p>
                              <p>Seasonality : {seasonality}</p>
                              <p>Cost : {cost}</p>
                              <p>visitors : {visitors}</p>
                              <p>Rating :{rating}</p>
                        </div>
                  <div className='flex'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={userPhoto || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                              </div>
                        
                        </div>
                        <p className='mt-3 ml-4'>By { userName }</p>
                  </div>
                  <div className="card-actions justify-end">
                       <button className='btn btn-primary'  onClick={() => navigate(-1)}>Go Back</button>
                        
                  </div>
                  </div>
            </div>
      );
};

export default SingleSportUser;