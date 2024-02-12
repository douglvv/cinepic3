import { Suspense } from "react";
import TitleResults from "../components/title/title-results";
import TitleCardSkeleton from "../components/title/title-card-skeleton";

export const metadata = {
  title: "Search Results - Cinepic",
  description: "Generated by create next app",
};

function Results({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || '1';

  return (
    <>
      <section
        key={Math.random()}
        className="min-h-[85vh] h-fit max-w-6xl mx-auto flex justify-center"
      >
        <div className="my-8 mx-4 md:mx-8 w-full">
          <Suspense key={query + currentPage} fallback={<TitleCardSkeleton />}>
            {query.length > 0 ? (
              <TitleResults query={query} currentPage={currentPage} />
            ) : null}
          </Suspense>
        </div>

        {/* Fazer paginação */}
      </section>
    </>
  );
}

export default Results;
