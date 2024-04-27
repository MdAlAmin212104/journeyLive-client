import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {

      const { user } = useContext(AuthContext)


      const handleAddSport = (e) => {
            e.preventDefault();
            const form = e.target
            const name = form.spotName.value;
            const countryName = form.countryName.value;
            const location = form.location.value;
            const seasonality = form.seasonality.value;
            const time = form.time.value;
            const cost = form.cost.value;
            const visitors = form.visitors.value;
            const rating = form.rating.value;
            const photo = form.photo.value;
            const desc = form.desc.value;
            const email = user?.email;
            const userName = user?.displayName;
            const userPhoto = user?.photoURL;
            const newProduct = {name, countryName, location, seasonality, time, cost, visitors, rating, photo, desc, email, userName, userPhoto}
            fetch('http://localhost:5000/sport', {
                  method: 'POST',
                  headers: {
                        "content-type": "application/json",
                  },
                  body: JSON.stringify(newProduct)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              Swal.fire("this product database added success!");
                        }
                        form.reset();

                  })
      }
      return (
            <div className='bg-[#F4F3F0] p-8'>
                  <h3 className="lg:text-5xl text-2xl text-center poppins font-bold mt-8">Add Tourists Spot</h3>
                  <p className="text-xl font-medium lg:w-2/3 text-center mx-auto pt-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>



                 <form onSubmit={handleAddSport} className="card-body">
                        <div className='grid md:grid-cols-2 gap-4'>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Tourists-spot-name :</span>
                                    </label>
                                    <input type="text" name='spotName' placeholder="Spot Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Country Name :</span>
                                    </label>
                                    <input type="text" name='countryName' placeholder="Country Name" className="input input-bordered" required />
                              </div>
                              
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Location :</span>
                                    </label>
                                    <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Seasonality :</span>
                                    </label>
                                    <input type="text" name='seasonality' placeholder="Seasonality" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Travel Time :</span>
                                    </label>
                                    <input type="text" name='time' placeholder="Time" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Average Cost :</span>
                                    </label>
                                    <input type="text" name='cost' placeholder="Average cost" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Total Visitors Per Year :</span>
                                    </label>
                                    <input type="text" name='visitors' placeholder="Total Visitors Per Year" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Rating :</span>
                                    </label>
                                    <input type="text" name='rating' placeholder="User Rating " className="input input-bordered" required />
                              </div>
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL :</span>
                              </label>
                              <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Description :</span>
                              </label>
                              <textarea name="desc" id="" cols="30" rows="10" placeholder='description......'  className="rounded-3xl p-4"></textarea>
                              
                        </div>
                        <input type="submit" value='Add Sport' className='btn bg-[#D2B48C] my-4 text-xl' />
                                    
                  </form>
            </div>
      );
};

export default AddTouristSpot;