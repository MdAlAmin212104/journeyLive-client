import React from 'react';

const PeopleChoose = () => {
      return (
            <div>
                  <div className="gadgetContainer">
                  {/* header */}
                  <div className="text-center md:text-left mt-20">
                        <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                        <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                              
                        </span>
                        Why Us
                        </p>
                        <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
                        Why People Choose Us
                        </p>
                  </div>

                  {/* Container */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
                        <img src='https://gigagadgets-f4dcf.web.app/assets/1-b9c7ef43.webp' alt="" />
                        <p className="font-semibold text-lg text-center dark:text-white">
                        Fast & Secure <br />
                        Delivery
                        </p>
                        </div>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
                        <img src='https://gigagadgets-f4dcf.web.app/assets/2-521ae944.webp' alt="" />
                        <p className="font-semibold text-lg text-center dark:text-white">
                        Money Back <br />
                        Guarantee
                        </p>
                        </div>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
                        <img src='https://gigagadgets-f4dcf.web.app/assets/3-17f746a2.webp' alt="" />
                        <p className="font-semibold text-lg text-center dark:text-white">
                        24 Hour Return <br />
                        Policy
                        </p>
                        </div>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
                        <img src='https://gigagadgets-f4dcf.web.app/assets/4-dc55e9f1.webp' alt="" />
                        <p className="font-semibold text-lg text-center dark:text-white">
                        Pro Quality <br />
                        Support
                        </p>
                        </div>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
                        <img src='https://gigagadgets-f4dcf.web.app/assets/5-343b4c2f.webp' alt="" />
                        <p className="font-semibold text-lg text-center dark:text-white">
                        Next Level Pro <br />
                        Quality
                        </p>
                        </div>
                  </div>
                  </div>
            </div>
      );
};

export default PeopleChoose;