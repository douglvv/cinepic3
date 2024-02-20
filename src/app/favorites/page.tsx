import { auth } from "@clerk/nextjs";
import { Suspense } from "react";
import TitleCardSkeleton from "../components/title/title-card-skeleton";
import FavoritesResults from "../components/favorites-results";

function Favorites() {
  const { userId } = auth();

  return (
    <>
      <section
        key={Math.random()}
        className="min-h-[85vh] h-fit max-w-6xl mx-auto flex justify-center"
      >
        <div className="my-8 mx-4 md:mx-8 w-full">
          <h1 className="text-2xl text-neutral-200 font-semibold mx-4">
            My Favorites:
          </h1>
          <Suspense key={Math.random()} fallback={<TitleCardSkeleton />}>
            <FavoritesResults id={userId} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default Favorites;
