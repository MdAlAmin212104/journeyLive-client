import React, { useEffect, useState } from 'react';
import DisplayCountryInfo from '../DisplayCountryInfo/DisplayCountryInfo';

const CountrySection = () => {
      const [countryInfo, setCountryInfo] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/country', {
                  method: 'GET',
            })
                  .then(res => res.json())
                  .then(data => {
                        setCountryInfo(data);
                  })
      }, [])
      return (
            <div className="gadgetContainer">
            {/* header */}
                  <div className="text-center md:text-left mt-16">
                  <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                        <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                        
                        </span>
                        Top country
                  </p>
                  <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
                        Country Information
                  </p>
                  </div>

                  {/* {products} */}

                  <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
                        {
                              countryInfo.map(info => <DisplayCountryInfo key={info._id} info={info} />)   
                        }
                  </div>
            </div>
      );
};

export default CountrySection;