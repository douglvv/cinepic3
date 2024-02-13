import ShowTitleData from "@/app/components/title/show-title-data";
import ShowTitleDataSkeleton from "@/app/components/title/show-title-data-skeleton";
import { Suspense } from "react";

function ViewTitle({ params }: { params: { type: string; imdbID: string } }) {
  const type = params.type;
  const imdbID = params.imdbID;

  return (
    <div className="min-h-[85vh] max-w-6xl mx-auto flex flex-row flex-wrap gap-12 m-4 mt-12 mb-12">
        <Suspense fallback={<ShowTitleDataSkeleton/>}>
          <ShowTitleData imdbID={imdbID} />
        </Suspense>
    </div>
  );
}

export default ViewTitle;
