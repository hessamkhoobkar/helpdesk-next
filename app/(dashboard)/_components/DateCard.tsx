import DateParser from "@/app/(dashboard)/_components/utils/DateParser";

export default function DateCard({
  title,
  date,
}: {
  title: string;
  date: Date | string;
}) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-1 px-4 py-2 border rounded-2xl">
      <span className="text-xs text-foreground-400">{title}</span>
      <span className="text-sm">
        <DateParser date={date} day="numeric" weekday="long" month="short" />
      </span>
    </div>
  );
}
