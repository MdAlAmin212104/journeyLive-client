import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const Navbar = () => {
      const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
      

      const { logOut, user } = useContext(AuthContext);

      // localStorage.setItem('theme', theme);
      // const localTheme = localStorage.getItem('theme');
      // console.log(localTheme);
      useEffect(() => {
            localStorage.setItem('theme', theme);
            const localTheme = localStorage.getItem('theme');
            document.querySelector('html').setAttribute('data-theme', localTheme);
      }, [theme])

      const handleChange = (e) => {
            if (e.target.checked) {
                  setTheme("dark");
            } else {
                  setTheme("light");
            }
      }


      const handleLogOut = () => {
            logOut()
                  .then(() => {
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
            <div className="navbar poppins dark:text-white">
                  <div className="navbar-start ">
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
                        <div className=" navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black">
                              {links}
                        </ul>
                        </div>
                  <div className="navbar-end">
                        <label className="cursor-pointer grid place-items-center ml-4">
                        <input onChange={handleChange} checked={theme === 'light' ? false : true} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  </label>
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