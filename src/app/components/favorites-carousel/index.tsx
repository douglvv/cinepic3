/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";

type Favorite = {
  imdbID: string;
  _id: string;
};

type User = {
  externalId: string;
  favorites: Favorite[];
};

async function FavoritesCarousel({}) {
  const { userId }: { userId: string | null } = auth();

  if (!userId) redirect("/sign-in");

  const res = await axios.get<User>(
    `http://localhost:3000/api/getUser/${userId}`
  );

  return (
    <>
      {res.data && res.data.favorites ? (
        <section className="flex text-neutral-200 justify-center items-center">
          <Carousel>
            <Link
              href={"/my-favorites"}
              className="text-neutral-300 hover:underline"
            >
              My Favorites:
            </Link>

            <CarouselContent className="mt-4">
              {res.data.favorites.map((item, index) => (
                <CarouselItem key={item.imdbID} className="basis-1/3">
                  <img
                    className="h-auto sm:max-w-[175px] max-w-[233.33px] aspect-2/3
                  shadow-md hover:shadow-lg dark:hover:shadow-lg
                  transition-transform duration-300 rounded-lg"
                    src="/placeholderPoster.jpg"
                    alt="Test"
                  />
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
