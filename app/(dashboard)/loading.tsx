import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 p-16 translate-y-6 transition-all duration-200 ease-in-out">
      <Spinner size="lg" />
      <div>
        <span className="brand-type loading">Help</span>
        <span className="brand-type loading">Desk</span>
      </div>
    </div>
  );
}
