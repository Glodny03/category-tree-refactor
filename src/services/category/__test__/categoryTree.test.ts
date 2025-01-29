import test from 'ava';

import { CORRECT } from '../../../data/correctResult';
import { getCategories } from '../../../mocks/mockedApi';
import { CategoryListElement } from '../../../types/category';
import { categoryTree } from '../categoryTree';

test('categoryTree should return a correctly sorted category tree', async (t) => {
  const result: CategoryListElement[] = await categoryTree(getCategories);

  t.deepEqual(
    result,
    CORRECT,
    'categoryTree should return properly sorted categories matching correctResult.ts'
  );
});

test('categoryTree should return an empty array if API returns no data', async (t) => {
  const emptyFetch = async () => ({ data: [] });

  const result = await categoryTree(emptyFetch);

  t.deepEqual(
    result,
    [],
    'categoryTree should return an empty array when no data is provided'
  );
});
