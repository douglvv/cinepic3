import FavoritesCarousel from "../components/favorites-carousel";

function Browse() {
  return (
    <>
      <div
        className="min-h-[90vh] text-neutral-200 flex flex-col gap-4 mt-8 
        container max-w-6xl mx-auto"
      >
        <div className="w-full flex mb-4">
          <h1 className="text-2xl font-semibold">Browse</h1>
        </div>
        <FavoritesCarousel />
      </div>
    </>
  );
}

export default Browse;
