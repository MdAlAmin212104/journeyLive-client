import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayCountryInfo = ({ info }) => {
      const navigate = useNavigate()
      const {name, image, desc} = info;
      return (
            <div onClick={()=>navigate(`/countryName/${name}`)}  className="card dark:bg-[#daaba3] shadow-xl pt-4">
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