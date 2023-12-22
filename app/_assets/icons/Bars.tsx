type Props = React.SVGProps<SVGSVGElement> & {
  color1?: string;
  color2?: string;
  color3?: string;
};

export function BarsIcon({
  color1 = "fill-default-200",
  color2 = "fill-default-200",
  color3 = "fill-default-200",
  ...props
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className={color3}
        d="M18.251 3a2.249 2.249 0 0 0-2.249 2.25v13.5a2.249 2.249 0 1 0 4.498 0V5.25A2.25 2.25 0 0 0 18.251 3"
      ></path>
      <path
        className={color2}
        d="M11.751 7a2.25 2.25 0 0 0-2.249 2.25v9.5a2.249 2.249 0 1 0 4.498 0v-9.5A2.25 2.25 0 0 0 11.751 7"
      ></path>
      <path
        className={color1}
        d="M5.25 11a2.25 2.25 0 0 0-2.25 2.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11"
      ></path>
    </svg>
  );
}
