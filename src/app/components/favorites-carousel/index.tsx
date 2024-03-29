/* eslint-disable @next/next/no-img-element */
import APIService from "@/app/services/APIService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type Favorite = {
  imdbID: string;
  _id: string;
  posterUrl: string;
};

type User = {
  externalId: string;
  favorites: Favorite[];
};

async function FavoritesCarousel({ userId }: { userId: string | null }) {
  if (!userId) return null;

  const res = await APIService.getUser(userId);

  if (res.status === 404) {
    alert("reloading")
    location.reload();
  }

  return (
    <>
      {res.status === 200 && res.data && res.data.favorites.length > 0 ? (
        <section className="container max-w-6xl text-neutral-200">
          <Link
            href={"/favorites"}
            className="text-neutral-300 hover:text-neutral-200 underline"
          >
            My Favorites:
          </Link>
          <Carousel
            opts={{
              align: "center",
              dragFree: true,
              loop: false,
              slidesToScroll: "auto",              
            }}
          >
            <CarouselContent className="mt-4">
              {res.data.favorites
                .slice()
                .reverse()
                .map((item: Favorite, index: number) => (
                  <CarouselItem
                    key={item.imdbID}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <Link
                      href={`/title/${item.imdbID}`}
                      className="flex items-center justify-center"
                    >
                      <img
                        className="h-auto sm:max-w-[175px] max-w-[233.33px] aspect-2/3
                  shadow-md hover:shadow-lg dark:hover:shadow-lg
                  transition-transform duration-300 rounded-lg"
                        src={
                          item.posterUrl === "N/A"
                            ? "/placeholderPoster.jpg"
                            : item.posterUrl
                        }
                        alt="Poster"
                      />
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      ) : (
        <section className="flex flex-col text-neutral-400">
          <Link href={"/favorites"} className="text-neutral-300 underline">
            My Favorites:
          </Link>
          <div>
            <p className="text-sm m-4">Nothing here yet.</p>
          </div>
        </section>
      )}
    </>
  );
}

export default FavoritesCarousel;
