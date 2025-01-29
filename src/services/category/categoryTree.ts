import { Category, CategoryListElement } from 'types/category';

import {
  buildCategoryElement,
  setShowOnHomeFlags,
} from './categoryHelpers';

export const categoryTree = async (
  fetchCategories: () => Promise<{ data: Category[] }>
): Promise<CategoryListElement[]> => {
  const { data } = await fetchCategories();
  if (!data) return [];

  const toShowOnHome: number[] = [];

  const rootCategories = data
    .map((cat) => buildCategoryElement(cat, toShowOnHome))
    .sort((a, b) => a.order - b.order);

  setShowOnHomeFlags(rootCategories, toShowOnHome);
  return rootCategories;
};
