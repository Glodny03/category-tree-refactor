import { Category, CategoryListElement } from 'types';

export const parseCategoryOrder = (
  title: string | undefined,
  fallback: number
): { order: number; hasHash: boolean } => {
  if (!title) {
    return { order: fallback, hasHash: false };
  }

  const hasHash = title.includes('#');
  const [rawOrder] = title.split('#');
  const parsedString = hasHash ? rawOrder : title;

  const parsed = parseInt(parsedString, 10);

  return {
    order: isNaN(parsed) ? fallback : parsed,
    hasHash,
  };
};

export const buildCategoryElement = (
  category: Category,
  toShowOnHome: number[]
): CategoryListElement => {
  const {
    Title,
    id,
    name,
    MetaTagDescription,
    children: subCategories,
  } = category;
  const { order, hasHash } = parseCategoryOrder(Title, id);

  if (hasHash) {
    toShowOnHome.push(id);
  }

  const children = (subCategories ?? [])
    .map((child) => buildCategoryElement(child, toShowOnHome))
    .sort((a, b) => a.order - b.order);

  return {
    id,
    name,
    order,
    image: MetaTagDescription,
    showOnHome: false,
    children,
  };
};

export const setShowOnHomeFlags = (
  categories: CategoryListElement[],
  toShowOnHome: number[]
): void => {
  if (categories.length <= 5) {
    categories.forEach((cat) => {
      cat.showOnHome = true;
    });
    return;
  }

  if (toShowOnHome.length > 0) {
    categories.forEach((cat) => {
      cat.showOnHome = toShowOnHome.includes(cat.id);
    });
    return;
  }

  categories.forEach((cat, index) => {
    cat.showOnHome = index < 3;
  });
};
