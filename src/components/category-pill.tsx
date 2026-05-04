import { Category, CategoryCode } from "../types/category";
import { IconName } from "../types/icon-name";
import { Pill, PillProps } from "./pill";

type CategoryPillProps = {
  category: Category;
} & Pick<PillProps, "active">;

export const CategoryPill = ({ category, active }: CategoryPillProps) => {
  return (
    <Pill
      iconName={categoryIconMap[category.code]}
      label={category.name}
      active={active}
    />
  );
};

const categoryIconMap: Record<CategoryCode, IconName> = {
  ADVENTURE: "Adventure",
  BEACH: "Beach",
  CULTURE: "Culture",
  FAVORITE: "Star",
  GASTRONOMY: "Gastronomy",
  HISTORY: "History",
  LUXURY: "Luxury",
  NATURE: "Nature",
  SHOPPING: "Shopping",
  URBAN: "Urban",
};
