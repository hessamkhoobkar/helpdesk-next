import React from "react";

export default function UserCardField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-xs text-primary-400 dark:text-primary-500">
        {`${label}:`}
      </span>
      <p className="font-medium text-sm">
        {value.slice(0, 24) && value.length > 24
          ? value.slice(0, 24) + "..."
          : value}
      </p>
    </div>
  );
}
