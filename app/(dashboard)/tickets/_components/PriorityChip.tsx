import { BarsIcon } from "@/app/_assets/icons/Bars";

export default function PriorityChip({
  priority,
}: {
  priority: "LOW" | "MEDIUM" | "HIGH";
}) {
  let text = "";
  let textColor = "text-default-foreground";
  let color1: string | undefined;
  let color2: string | undefined;
  let color3: string | undefined;

  switch (priority) {
    case "LOW":
      text = "Low";
      color1 = "fill-success";
      textColor = "text-success";
      break;
    case "MEDIUM":
      text = "Medium";
      color1 = "fill-warning";
      color2 = "fill-warning";
      textColor = "text-warning";
      break;
    case "HIGH":
      text = "High";
      color1 = "fill-danger";
      color2 = "fill-danger";
      color3 = "fill-danger";
      textColor = "text-danger";
      break;
  }

  return (
    <div className="text-xl font-medium text-default-300 flex gap-2 px-0 py-1">
      <BarsIcon color1={color1} color2={color2} color3={color3} />
      <span className={`text-base font-medium ${textColor}`}>{text}</span>
    </div>
  );
}
