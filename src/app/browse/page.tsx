import FavoritesCarousel from "../components/favorites-carousel";
import { auth } from "@clerk/nextjs";

function Browse() {
  const { userId } = auth();

  return (
    <>
      {userId && (
        <>
          <div
            className="min-h-[90vh] text-neutral-200 flex flex-col gap-4 my-8 
            container max-w-6xl mx-auto"
          >
            <div className="w-full flex mb-4">
              <h1 className="text-2xl font-semibold">Browse</h1>
            </div>
            <FavoritesCarousel userId={userId} />
          </div>
        </>
      )}
    </>
  );
}

export default Browse;
