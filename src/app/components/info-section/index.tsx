/* eslint-disable @next/next/no-img-element */
function InfoSection() {
  return (
    <>
      <section
        className="min-h-full mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 bg-none"
        id="info"
      >
        <div className="m-3 p-3 w-full flex flex-col justify-center text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow mb-3 bg-clip-text 
          text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700">
            Explore a World of Titles
          </h1>
          <p className="text-md md:text-lg text-neutral-200 font-medium drop-shadow">
            Discover a vast collection of titles from various genres. Search and
            find your favorite movies, TV shows, and more. Our platform makes it
            easy to explore the world of entertainment.
          </p>
        </div>
        <div className="m-3 p-3 w-full flex justify-center items-center">
          <img
            className="drop-shadow-lg max-h-[400px] w-auto -scale-x-100"
            src="/video-media.png"
            alt="Person searching video medias"
          />
        </div>
      </section>

      <hr className="h-px border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />      
      

      <section className="min-h-full mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 bg-none ">
        <div className="m-3 p-3 w-full flex justify-center items-center">
          <img
            className="drop-shadow-lg max-h-[400px] w-auto -scale-x-100"
            src="/add-favorite.png"
            alt="Person adding title to favorites"
          />
        </div>
        <div className="m-3 p-3 w-full flex flex-col justify-center text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow mb-3 bg-clip-text text-transparent bg-gradient-to-l from-red-500 via-red-600 to-red-700">
            Build Your Favorites List
          </h1>
          <p className="text-md md:text-lg text-neutral-200 font-medium drop-shadow">
            Create a personalized favorites list by adding titles that resonate
            with you. Our platform allows you to curate a collection of your
            most-loved movies and shows, making it easy to revisit them anytime.
          </p>
        </div>
      </section>

      <hr className="h-px border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />      

      <section className="min-h-full mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 bg-none">
        <div className="m-3 p-3 w-full flex flex-col justify-center text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700">
            Access Anywhere, Anytime
          </h1>
          <p className="text-md md:text-lg text-neutral-200 font-medium drop-shadow">
            Experience the convenience of our platform on the go. Our
            mobile-friendly design ensures you can access your favorite titles
            anytime, anywhere, whether you are using a smartphone or tablet.
            Stay connected to your entertainment on the move.
          </p>
        </div>
        <div className="m-3 p-3 w-full flex justify-center items-center">
          <img
            className="drop-shadow-lg max-h-[400px] w-auto"
            src="/devices.png"
            alt="Multiple device option (PC, Tablet, Smartphone)"
          />
        </div>
      </section>

      
    </>
  );
}

export default InfoSection;
