import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/cargogo-logo.png';

export default function Navbar() {
  const [showSidebar, setSidebar] = useState(false);

  return (
    <nav className="md:px-10 md:py-6 md:mx-8 xs:p-4">
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
            <button onClick={() => setSidebar(!showSidebar)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          )}
          <div className={`top-0 right-0 w-[48vw] bg-slate-50 shadow-lg p-10 pl-5 text-white fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          }`}
          >
            <ul className="flex flex-col mt-4 left-0 right-[25rem] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/sign-in" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</Link>
              </li>
              <li>
                <Link to="/sign-up" className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign up</Link>
              </li>
            </ul>
          </div>
        </>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All cars</Link>
            </li>
            <li>
              <Link to="/sign-in" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</Link>
            </li>
            <li>
              <Link to="/sign-up" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
