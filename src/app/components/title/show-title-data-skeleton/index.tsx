function ShowTitleDataSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
      <div className="flex mx-3">
        <div
          className="bg-neutral-500 animate-pulse w-[250px] h-[375px] aspect-2/3 shadow-lg
            rounded-lg"
        />
      </div>

      <div className="flex flex-col max-w-2xl gap-2 animate-pulse lg:-ml-10 mx-3">
        <div className="flex flex-row gap-6 w-96 bg-neutral-500 h-8 rounded-full animate-pulse" />
        <div className="flex flex-row gap-6 w-52 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row gap-6 w-48 mb-9 bg-neutral-500 h-4 rounded-full animate-pulse " />
        <div className="flex flex-row gap-6 w-42 bg-neutral-500 h-3 rounded-full animate-pulse " />
        <div className="flex flex-row gap-6 w-56 mb-9 bg-neutral-500 h-3 rounded-full animate-pulse " />{" "}
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
        <div className="flex flex-row w-96 bg-neutral-500 h-3 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export default ShowTitleDataSkeleton;
