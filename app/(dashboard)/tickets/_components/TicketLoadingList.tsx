import SkeletonCardTicket from "../../_components/SkeletonCardTicket";

export default function TicketLoadingList() {
  return (
    <div className="w-full flex flex-col gap-4">
      {[...Array(4)].map((e, i) => {
        return <SkeletonCardTicket key={i} />;
      })}
    </div>
  );
}
