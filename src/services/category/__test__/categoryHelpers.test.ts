import test from 'ava';

import { CategoryListElement } from '../../../types/category';
import { parseCategoryOrder, setShowOnHomeFlags } from '../categoryHelpers';

test('parseCategoryOrder should correctly extract and parse order numbers', (t) => {
  t.deepEqual(parseCategoryOrder('3#Pranie i prasowanie', 10), {
    order: 3,
    hasHash: true,
  });
  t.deepEqual(parseCategoryOrder('5', 10), { order: 5, hasHash: false });
  t.deepEqual(parseCategoryOrder('Środki do czyszczenia', 10), {
    order: 10,
    hasHash: false,
  });
  t.deepEqual(parseCategoryOrder(undefined, 99), { order: 99, hasHash: false });
});

test('setShowOnHomeFlags should correctly assign showOnHome property when category count is ≤ 5', (t) => {
  const categories: CategoryListElement[] = [
    {
      id: 9288,
      name: 'Pranie i prasowanie',
      order: 1,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9289,
      name: 'Sprzątanie i czyszczenie',
      order: 2,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9290,
      name: 'Zmywanie naczyń',
      order: 3,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9291,
      name: 'Powiew świeżości',
      order: 4,
      image: '',
      showOnHome: false,
      children: [],
    },
  ];

  setShowOnHomeFlags(categories, []);

  t.true(
    categories[0].showOnHome,
    'Pranie i prasowanie should have showOnHome = true'
  );
  t.true(
    categories[1].showOnHome,
    'Sprzątanie i czyszczenie should have showOnHome = true'
  );
  t.true(
    categories[2].showOnHome,
    'Zmywanie naczyń should have showOnHome = true'
  );
  t.true(
    categories[3].showOnHome,
    'Powiew świeżości should have showOnHome = true'
  );
});

test('setShowOnHomeFlags should correctly assign showOnHome when toShowOnHome list is used', (t) => {
  const categories: CategoryListElement[] = [
    {
      id: 9288,
      name: 'Pranie i prasowanie',
      order: 1,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9289,
      name: 'Sprzątanie i czyszczenie',
      order: 2,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9290,
      name: 'Zmywanie naczyń',
      order: 3,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9291,
      name: 'Powiew świeżości',
      order: 4,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9292,
      name: 'Dodatki do prania',
      order: 5,
      image: '',
      showOnHome: false,
      children: [],
    },
    {
      id: 9293,
      name: 'Środki do czyszczenia kuchni',
      order: 6,
      image: '',
      showOnHome: false,
      children: [],
    },
  ];

  const toShowOnHome = [9288, 9290];

  setShowOnHomeFlags(categories, toShowOnHome);

  t.true(
    categories[0].showOnHome,
    'Pranie i prasowanie should have showOnHome = true'
  );
  t.false(
    categories[1].showOnHome,
    'Sprzątanie i czyszczenie should have showOnHome = false'
  );
  t.true(
    categories[2].showOnHome,
    'Zmywanie naczyń should have showOnHome = true'
  );
  t.false(
    categories[3].showOnHome,
    'Powiew świeżości should have showOnHome = false'
  );
  t.false(
    categories[4].showOnHome,
    'Dodatki do prania should have showOnHome = false'
  );
  t.false(
    categories[5].showOnHome,
    'Środki do czyszczenia kuchni should have showOnHome = false'
  );
});
