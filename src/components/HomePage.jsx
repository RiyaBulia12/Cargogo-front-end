import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1616634375264-2d2e17736a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')] h-screen bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="md:pt-52 md:ml-24 py-36 px-10">
        <div className=''>
          <h2 className="flex flex-col md:text-5xl font-bold md:mb-2 xs:text-2xl">
            <span>We have the perfect car</span>
            <span>for your journey!</span>
          </h2>
          <h3 className="flex flex-col md:text-base md:mb-8 md:text-gray-900 xs:text-[11px]">
            <span>CarGoGo provides you with an affordable and convenient way to</span>
            <span>get around, allowing you to explore your destination with ease</span>
            <span>and freedom.</span>
          </h3>
          <Link to="/cars" type="button" className="bg-red-700 text-white font-bold rounded-full shadow-lg uppercase tracking-wider md:text-base md:py-4 md:px-8 py-2 px-6 text-[12px] mt-1">
            View Cars
          </Link>
        </div>
      </div>
    </div>
  );
}
