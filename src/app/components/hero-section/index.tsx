import Link from "next/link";

function Hero() {
  return (
    <div className="relative bg-[url('/bg.jpg')] bg-cover bg-opacity-50">
      {/* Effects bg */}
      <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 right-0vp-14 bg-black/40 blur-[5px]" />

      <section
        className="min-h-[65vh] container mx-auto flex
        items-center justify-center text-neutral-200 relative"
      >
        <div className="flex flex-col mx-3 px-3 max-w-5xl">
          <h1 className="font-bold text-4xl md:text-6xl shadow text-center mb-4">
            Every movie from IMDB
            <br />
            in a single place!
          </h1>

          <h1
            className="text-center text-neutral-300 text-lg md:text-xl 
            shadow font-medium mx-3 md:mx-5 max-w-2xl mb-4"
          >
            Explore a vast collection of movies, series, games, and more.
          </h1>

          <div className="max-w-96 mx-auto m-4 text-nowrap">
            <Link
              className="rounded-md m-2 py-2 px-4 md:py-4 md:px-8 bg-red-800 
              font-semibold text-center text-neutral-200 text-lg md:text-xl
              shadow-lg transition duration-300 ease-in-out hover:shadow-inner
              hover:bg-red-900 focus:outline-none focus:shadow-lg active:bg-red-950"
              href="/sign-up"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
