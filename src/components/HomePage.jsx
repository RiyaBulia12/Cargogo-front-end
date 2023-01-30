import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/9737535/pexels-photo-9737535.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Navbar />
      <div className="container relative h-screen">
        <div className="md:md:mt-[13rem] md:ml-[6rem] xs:mt-[7rem] xs:ml-[1rem]">
          <h2 className="flex flex-col md:text-5xl font-bold md:mb-2 md:text-white xs:text-2xl">
            <span>We have the perfect car</span>
            <span>for your journey!</span>
          </h2>
          <h3 className="flex flex-col md:text-base md:mb-8 md:text-gray-200 xs:text-[11px]">
            <span>CarGoGo provides you with an affordable and convenient way to</span>
            <span>get around, allowing you to explore your destination with ease</span>
            <span>and freedom.</span>
          </h3>
          <button type="button" className="bg-red-700 text-white font-bold rounded-full shadow-lg uppercase tracking-wider md:text-base md:py-4 md:px-8 xs:py-1 xs:px-2 xs:text-[12px] xs:mt-1">
            View Cars
          </button>
        </div>
      </div>
    </div>
  );
}
