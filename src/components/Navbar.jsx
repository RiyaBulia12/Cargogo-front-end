import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/cargogo_logo.png';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [showSidebar, setSidebar] = useState(false);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user ? true : false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const pos = isHomePage ? 'absolute' : 'relative';
  const menuTextColor = isHomePage ? 'text-white' : 'text-gray-700';

  const logout = () => {
    localStorage.removeItem('userInfo');
    setIsUserLoggedIn(false);
    navigate("/");
  };


  return (
    <nav className={`md:px-10 md:py-6 p-4 w-full ${pos}`}>
      <div className="container px-4 flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-7 mr-1 sm:h-12" alt="CarGoGo Logo" />
          <span className="self-center md:text-3xl xs:text-2xl font-bold whitespace-nowrap">CarGoGo</span>
        </Link>
        <>
          {showSidebar ? (
            <button
              type="button"
              className="flex text-2xl text-gray-500 items-center cursor-pointer fixed right-10 top-2 z-50"
              onClick={() => setSidebar(!showSidebar)}
            >
              x
            </button>
          ) : (
            <button onClick={() => setSidebar(!showSidebar)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          )}
          <div className={`top-0 right-0 w-[48vw] bg-slate-50 shadow-lg p-10 pl-5 text-white fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          }`}
          >
            <ul className="flex flex-col mt-4 left-0 right-[25rem] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {!isUserLoggedIn ? (
                <>
                <li>
                  <Link to="/sign-in" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Sign in</Link>
                </li>
                <li>
                  <Link to="/sign-up" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Sign up</Link>
                </li>
                </>
              ) : (
                <>
                <li>
                  <Link to="/cars" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Cars</Link>
                </li>
                <li>
                  <Link to="/add" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Add Car</Link>
                </li>
                <li>
                  <Link to="/delete" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Delete Car</Link>
                </li>
                <li>
                  <Link to={`/favorite`} className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Favorites</Link>
                </li>
                 <li>
                  <button onClickCapture={logout} className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Logout</button>
                </li>
                </>
              )}
            </ul>
          </div>
        </>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!isUserLoggedIn ? (
              <>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <Link to="/sign-in" className="p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:border-0  md:p-0">Sign in</Link>
              </li>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <Link to="/sign-up" className="p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:border-0  md:p-0">Sign up</Link>
              </li>
              </>
            ) : (
              <>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <Link to="/cars" className="p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:border-0  md:p-0">Cars</Link>
              </li>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <Link to="/add" className="p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:border-0  md:p-0">Add Cars</Link>
              </li>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <Link to="/delete" className="p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:border-0  md:p-0">Delete Cars</Link>
              </li>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <Link to={`/favorite`} className="p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:border-0  md:p-0">Favorites</Link>
              </li>
              <li className={`px-4 py-2 md:hover:border-b-4 md:hover:border-red-700 ${menuTextColor} transform transition-all duration-300`}>
                <button onClickCapture={logout} className={`p-4 block font-semibold uppercase py-2 pl-3 pr-4 text-base md:hover:bg-transparent md:border-0 md:p-0 md:hover:${menuTextColor} `}>Logout</button>
              </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
