import DateParser from "@/app/(dashboard)/_components/utils/DateParser";

export default function HeadInfo({
  subject,
  createdAt,
  user,
}: {
  subject: string;
  createdAt: Date;
  user: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-xl hover:text-primary transition-all duration-200 ease-in-out">
        {subject}
      </h1>

      <div className="flex flex-col md:flex-row gap-1 md:gap-2 font-medium text-sm text-default-400 dark:text-default-500 whitespace-nowrap">
        <div className="flex gap-1">
          <span>Created at</span>
          <DateParser date={createdAt} />
        </div>
        <div className="flex gap-1">
          <span>by</span>
          <span className="text-primary-300 hover:text-primary cursor-pointer">
            {user}
          </span>
        </div>
      </div>
    </div>
  );
}
