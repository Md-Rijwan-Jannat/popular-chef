import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const logOutHandler = () => {
    logOut()
      .then(result => console.log(result))
      .catch(error => {
        console.log(error)
      })
  }
  return (
   <div className='bg-base-100'>
     <div className="navbar border">
      <div className="navbar-start">
        <div className="dropdown flex-wrap md:flex">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu space-y-3 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <img className='w-24 lg:w-28' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1682962415~exp=1682963015~hmac=bcf3e0201b3e5a61add8cf12bc7f7b94cac6c432209742ba6275a3aa3d5e0ce8" alt="" />
        <img className='w-24 lg:w-36' src="https://findvectorlogo.com/wp-content/uploads/2022/02/camp-chef-vector-logo-2022.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 md:space-x-4 lg:space-x-6">
          <li className='font-bold'><Link to={'/'}>Home</Link></li>
          <li className='font-bold'><Link to={'/blog'}>Blog</Link></li>
          <li className='font-bold'><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end relative">
        {
          user && <div className=' group'>
            <div>
            <img className='rounded-lg transition duration-500 ease-in-out transform hover:scale-110 w-16 md:w-24 md:mr-2' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
          </div>
          <div className='absolute bottom-0 left-0 right-0 mt-5 text-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100'>
            <p className='text-sm text-gray-50 font-normal bg-gray-900 p-2 rounded-md w-[220px]'>{user?.email}</p>
          </div>
          </div>
        }
        {
          user ? <button onClick={logOutHandler } className="btn bg-red-700 border-none hover:bg-orange-400">Log out</button> : <Link to={'/login'} className="btn bg-red-700 border-none hover:bg-orange-400">Login</Link >
        }
      </div>
    </div>
   </div>
  );
};

export default Header;