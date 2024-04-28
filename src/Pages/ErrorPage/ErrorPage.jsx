import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../PageError.json";



const ErrorPage = () => {

      
      return (
            <section className="flex items-center h-full p-16 text-gray-800">
                  <div className="container flex flex-col items-center justify-center px-5 mx-auto">
                  <Lottie className='h-[400px]' animationData={groovyWalkAnimation} />
                        <div className="max-w-md text-center">
                              <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                              <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                              <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Back to homepage</Link>
                        </div>
                  </div>
            </section>
      );
};

export default ErrorPage;