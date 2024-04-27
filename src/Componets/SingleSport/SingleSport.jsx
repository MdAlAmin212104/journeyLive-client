import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleSport = () => {
      const singleSport = useLoaderData();
      const {_id, name, countryName, location, seasonality, time, cost, visitors, rating, photo, desc, userName, userPhoto} = singleSport;
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
                        <Link to={`/sportUpdate/${_id}`} className="btn btn-primary">Update</Link>
                        <button className="btn btn-error">Delete</button>
                  </div>
                  </div>
            </div>
      );
};

export default SingleSport;