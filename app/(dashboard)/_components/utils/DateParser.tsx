export default function DateParser({
  date,
  weekday,
  day,
  month,
  year,
}: {
  date: Date | string;
  month?: "short" | "long" | "narrow" | "numeric" | "2-digit" | undefined;
  weekday?: "short" | "long" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  day?: "numeric" | "2-digit" | undefined;
}) {
  const dateObject = new Date(date);

  let dateOptions: Intl.DateTimeFormatOptions = {};
  year && (dateOptions["year"] = year);
  month && (dateOptions["month"] = month);
  weekday && (dateOptions["weekday"] = weekday);
  day && (dateOptions["day"] = day);

  const paresedDate = dateObject.toLocaleDateString(undefined, dateOptions);

  return <span>{paresedDate}</span>;
}
