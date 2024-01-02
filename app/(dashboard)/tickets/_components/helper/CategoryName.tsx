export function GetCategoryName({
  id,
  categories,
}: {
  id: number;
  categories: { id: number; name: string }[];
}) {
  const categoryName = categories.find((category) => category.id === id)?.name;
  return <span>{categoryName}</span>;
}
