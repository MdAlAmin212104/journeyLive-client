import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

      const { logOut, user } = useContext(AuthContext);


      const handleLogOut = () => {
            logOut()
                  .then(res => {
                        Swal.fire("User logOut success!");
                  })
                  .catch(err => console.error(err));
      }

      const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/touristsSpot'>All Tourists Spot</NavLink></li>
            <li><NavLink to='/addSpot'>Add Tourists Spot</NavLink></li>
            <li><NavLink to='/spotList'>My List </NavLink></li>
      </>
      return (
            <div className="navbar bg-base-100 poppins">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                   {links}
                              </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-2xl text-[tomato]">JourneyLive</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {links}
                        </ul>
                        </div>
                        <div className="navbar-end">
                        {
                              user ? <>
                                          <span className='mr-4'></span>
                                          <div className="dropdown dropdown-end group">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar focus:outline-none">
                                                      <div className="w-10 rounded-full">
                                                            <img className='' alt="Tailwind CSS Navbar component" src={ user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocKfSrgZFBvoQ6s12ZB8gHSg3E625KGpnaiYthDiKIfNqh1g62wg=s96-c"} />
                                                      </div>
                                                </div>
                                                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 invisible opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                                                      <li><a>{user?.displayName || 'Name not found'}</a></li>
                                                      <li><a onClick={handleLogOut}>Logout</a></li>
                                                </ul>
                                          </div>
                                    </> 
                              :
                                    <>
                                          <Link to='/login' className="btn mr-4">Login</Link>
                                          <Link to='/register' className="btn">Register</Link>
                                    </>
                        }
                        
                  </div>
            </div>
      );
};

export default Navbar;