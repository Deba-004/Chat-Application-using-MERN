function Loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col w-52 gap-4">
          <div className="bg-[#ffffff26] animate-pulse h-32 w-full rounded"></div>
          <div className="bg-[#ffffff26] animate-pulse h-4 w-28 rounded"></div>
          <div className="bg-[#ffffff26] animate-pulse h-4 w-full rounded"></div>
          <div className="bg-[#ffffff26] animate-pulse h-4 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;