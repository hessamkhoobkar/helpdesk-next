import SkeletonCard from "./_components/SkeletonCard";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-4">
          <SkeletonCard />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <SkeletonCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <SkeletonCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <SkeletonCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <SkeletonCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-12">
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
