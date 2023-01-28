import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/9737535/pexels-photo-9737535.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Navbar />
      <div className="container relative h-screen">
        <div className="mt-[13rem] ml-[6rem]">
          <h2 className="text-5xl font-bold mb-2 text-white">
            We have the perfect car
            <br />
            for your journey!
          </h2>
          <h3 className="text-base mb-8 text-gray-200">
            CarGoGo provides you with an affordable and convenient way to
            <br />
            get around, allowing you to explore your destination with ease
            <br />
            and freedom.
          </h3>
          <button type="button" className="bg-red-700 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            View Cars
          </button>
        </div>
      </div>
    </div>
  );
}
