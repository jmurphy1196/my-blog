import { Categories } from "../interfaces";
export const displayCategories = (
  categories: Categories,
  sep = " "
): string => {
  const categoriesString = categories
    .map((category) => `#${category.type}`)
    .join(sep);
  return categoriesString;
};

export const scrollToDiv = (element: HTMLDivElement | null) => {
  if (element) {
    setTimeout(() => {
      window.scrollTo(0, element.getBoundingClientRect().top);
    }, 100);
  }
};
