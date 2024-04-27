import React from 'react';

const DisplayAllSport = ({ sport }) => {
      const {name, countryName, location, seasonality, time, cost, visitors, rating, photo, desc, email, userName} = sport;
      console.log(sport);
      return (
            // <div className="card bg-base-100 shadow-xl">
            //       <figure><img src={photo} alt="Shoes" className='h-auto' /></figure>
            //       <div className="card-body">
            //       <h2 className="card-title">{name}</h2>
            //             <p>{countryName}</p>
            //       <div className="card-actions justify-end">
            //             <button className="btn btn-primary">Buy Now</button>
            //       </div>
            //       </div>
            // </div>
            <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img src={photo} alt="Movie"/></figure>
                  <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                  </div>
                  </div>
            </div>
      );
};

export default DisplayAllSport;