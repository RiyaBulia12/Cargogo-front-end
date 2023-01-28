import { Link } from 'react-router-dom';
import logo from '../assets/cargogo-logo.png';

export default function Navbar() {
  return (
    <nav className="px-10 py-6 mx-8">
      <div className="container px-4 flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-7 mr-1 sm:h-12" alt="Flowbite Logo" />
          <span className="self-center text-3xl font-bold whitespace-nowrap">CarGoGo</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All cars</Link>
            </li>
            <li>
              <Link to="/" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Favorites</Link>
            </li>
            <li>
              <Link to="/" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</Link>
            </li>
            <li>
              <Link to="/" className="block font-semibold uppercase py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
