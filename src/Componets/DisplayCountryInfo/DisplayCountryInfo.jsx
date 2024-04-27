import React from 'react';

const DisplayCountryInfo = ({ info }) => {
      console.log(info);
      const {name, image, desc} = info;
      return (
            <div className="card bg-[#daaba3] shadow-xl pt-4">
                  <figure className="px-10 pt-10 h-[200px]">
                  <img src={image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{desc}</p>
                  </div>
            </div>
      );
};

export default DisplayCountryInfo;