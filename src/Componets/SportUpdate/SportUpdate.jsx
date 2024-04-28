import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SportUpdate = () => {

      const { user } = useContext(AuthContext);
      const singleSportInfo = useLoaderData();
      const navigate = useNavigate()
      
      const {_id, name, countryName, location, seasonality, time, cost, visitors, rating, photo, desc} = singleSportInfo;

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
            const UpdateProduct = {name, countryName, location, seasonality, time, cost, visitors, rating, photo, desc, email, userName, userPhoto}
            


            fetch(`http://localhost:5000/sport/${_id}`, {
                  method: 'PATCH',
                  headers: {
                        "content-type": "application/json",
                  },
                  body: JSON.stringify(UpdateProduct)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              Swal.fire("this product database Update success!");
                        }
                        navigate(location?.state  || '/touristsSpot')
                  })
      }
      return (
            <div className='bg-[#F4F3F0] p-8'>
                  <h3 className="lg:text-5xl text-2xl text-center poppins font-bold mt-8">Update Tourists Spot</h3>
                  <p className="text-xl font-medium lg:w-2/3 text-center mx-auto pt-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>



                 <form onSubmit={handleAddSport} className="card-body">
                        <div className='grid md:grid-cols-2 gap-4'>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Tourists-spot-name :</span>
                                    </label>
                                    <input type="text" name='spotName' defaultValue={name} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Country Name :</span>
                                    </label>
                                    <input type="text" name='countryName' defaultValue={countryName} className="input input-bordered" required />
                              </div>
                              
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Location :</span>
                                    </label>
                                    <input type="text" name='location' defaultValue={location} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Seasonality :</span>
                                    </label>
                                    <input type="text" name='seasonality' defaultValue={seasonality} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Travel Time :</span>
                                    </label>
                                    <input type="text" name='time' defaultValue={time} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Average Cost :</span>
                                    </label>
                                    <input type="text" name='cost' defaultValue={cost} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Total Visitors Per Year :</span>
                                    </label>
                                    <input type="text" name='visitors' defaultValue={visitors} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Rating :</span>
                                    </label>
                                    <input type="text" name='rating' defaultValue={rating} className="input input-bordered" required />
                              </div>
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL :</span>
                              </label>
                              <input type="text" name='photo' defaultValue={photo} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Description :</span>
                              </label>
                              <textarea name="desc" id="" cols="30" rows="10" defaultValue={desc}  className="rounded-3xl p-4"></textarea>
                              
                        </div>
                        <input type="submit" value='Add Sport' className='btn bg-[#D2B48C] my-4 text-xl' />
                                    
                  </form>
            </div>
      );
};

export default SportUpdate;