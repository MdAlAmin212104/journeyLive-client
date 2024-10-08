import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllSport = ({ sport }) => {
      const { _id, name, seasonality, time, rating, photo, desc, userName, userPhoto, cost } = sport;
      
      
      const sliceText = (text, maxChars) => {
            if (text.length <= maxChars) {
                  return text;
            }
            return text.slice(0, maxChars) + '...';
      };


      return (
            <div className="card bg-base-100 shadow-xl poppins">
                  <figure className='h-[300px]'><img src={photo} alt="Shoes" /></figure>
                  <div className="mt-6 p-4">
                        <h2 className="card-title">{name}</h2>
                        <div className='flex justify-between'>
                              <p> rating : {rating}</p>
                              <p>time : {time}</p>
                        </div>
                        <div className='flex justify-between'>
                              <p>seasonality : {seasonality}</p>
                              <p>Cost : { cost }</p>
                        </div>
                        <div className='flex'>
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img alt="Tailwind CSS Navbar component" src={userPhoto || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                    </div>
                              
                              </div>
                              <p className='mt-3 ml-4'>By { userName }</p>
                        </div>

                        <p> {sliceText(desc, 100)} </p>
                              
                        <div className="card-actions justify-end mt-8">
                              <Link to={`/sportUser/${_id}`} className="btn btn-primary">View Details</Link>
                        </div>
                  </div>
            </div>
            
      );
};

export default DisplayAllSport;