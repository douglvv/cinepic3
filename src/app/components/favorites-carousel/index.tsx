/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";

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
  if(!userId) return null

  const res = await axios.get<User>(
    `http://localhost:3000/api/getUser/${userId}`
  );

  return (
    <>
      {res.data && res.data.favorites.length > 0 ? (
        <section className="container max-w-6xl text-neutral-200">
          <Link
            href={"/my-favorites"}
            className="text-neutral-300 hover:underline"
          >
            My Favorites:
          </Link>
          <Carousel opts={{
           align: 'center',
           dragFree: true,
           loop: false,
          }}>
            <CarouselContent className="mt-4">
              {res.data.favorites.slice().reverse().map((item, index) => (
                <CarouselItem
                  key={item.imdbID}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Link href={`/title/${item.imdbID}`} className="flex items-center justify-center">
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
          <Link
            href={"/my-favorites"}
            className="text-neutral-300 hover:underline"
          >
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
