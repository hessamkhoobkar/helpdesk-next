import DateParser from "@/app/(dashboard)/_components/utils/DateParser";
import Link from "next/link";

export default function HeadInfo({
  subject,
  createdAt,
  user,
  id,
  withLink = false,
}: {
  subject: string;
  createdAt: Date;
  user: string;
  id: string;
  withLink?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 grow">
      {withLink ? (
        <h1 className="w-full font-bold text-xl hover:text-primary transition-all duration-200 ease-in-out">
          <Link className="w-full block" href={`/tickets/${id}`}>
            {subject}
          </Link>
        </h1>
      ) : (
        <h1 className="w-full font-bold text-xl">{subject}</h1>
      )}

      <div className="flex flex-col md:flex-row gap-1 md:gap-2 font-medium text-sm text-default-400 dark:text-default-600 whitespace-nowrap">
        <div className="flex gap-1">
          <span>Created at</span>
          <DateParser date={createdAt} />
        </div>
        <div className="flex gap-1">
          <span>by</span>
          <span className="text-primary hover:text-primary-300 cursor-pointer transition-all duration-200 ease-in-out">
            {user}
          </span>
        </div>
      </div>
    </div>
  );
}
