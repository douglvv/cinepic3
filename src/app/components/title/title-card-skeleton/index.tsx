import { Skeleton } from "@/components/ui/skeleton";

function TitleCardSkeleton() {
  return (
    <>
      <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="bg-neutral-500 shadow-md rounded-lg h-auto w-full 
            sm:max-w-[175px] max-w-[233.33px] aspect-2/3"
          />
        ))}
      </div>
    </>
  );
}

export default TitleCardSkeleton;
