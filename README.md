# 🏗 Category Tree Parser

## 📌 Description  
This project fetches a product category tree, processes it, and returns it in the correct format.  
It also fixes an issue with sorting second-level categories and makes testing easier by decoupling dependencies.  

## 🚀 Getting Started  
1. Install dependencies:  
   ```bash
   npm install
   ```
2. Run tests:  
   ```bash
   npm run test
   ```

## 🛠 Project Structure  
```
├── data/                  # Test input and expected results
├── mocks/                 # Mock API
├── services/category/     # Category parsing logic
│   ├── categoryTree.ts    # Main function for building the category tree
│   ├── categoryHelpers.ts # Helper functions (parsing, sorting, flags)
│   ├── __test__/          # Unit tests
├── types/                 # TypeScript interfaces
└── index.ts               # Entry point
```

## 🔍 Key Features  
- **categoryTree** – Fetches and maps data into the correct structure.  
- **parseCategoryOrder** – Extracts order numbers from category titles.  
- **buildCategoryElement** – Recursively builds the category tree.  
- **setShowOnHomeFlags** – Logic for setting `showOnHome` flags.  

## ✅ Tests  
The `ava` test suite covers:  
- Parsing category order (`parseCategoryOrder`).  
- Correct `showOnHome` flag assignment.  
- The full category tree structure.  

## 📌 Project Goals
✔️ Modular and clean architecture 📦  
✔️ Proper sorting of categories 🔄
✔️ Fully testable with mocked data 🧪  
✔️ ESLint and Prettier compliant 🏆  


## 📜 Task Description (Archived)
> ## A co my tu mamy?

> W pliku **task.ts** mamy funkcje która pobiera drzewo kategorii pewnych produktów z zewnętrznego źródła, odpowiednio je mapuje i zwraca.
> Dodatkowo funkcja **categoryTree** zawiera błąd, polegający na niewłaściwym sortowaniu kategorii drugiego poziomu (szczegóły w wymaganiach do zadania).
>
> W pliku **mockedApi.ts** znajduje się fejkowe źródło danych i tam nie ma potrzeby nic zmieniać.
>
> ## Co należy zrobić?
>
> 1. Refactor funkcji categoryTree. Wszystkie chwyty dozwolone. Dzielenie funkcji, wynoszenie zależności, zmiana parametrów wejściowych, etc...
> 2. Źródło danych (funkcja getCategories) powinna być przekazywana jako zależność. W idealnym scenariuszu categoryTree opiera się na abstrakcji i nie jest świadoma co konretnie zostanie jej przekazane
> 3. Poprawiony zostanie bug opisany poniżej.
> 4. W osobnym pliku przeprowadzony zostanie dowód (w postaci kodu) który jednoznacznie pokaże poprawność działania funkcji categoryTree.
>
> > Wszystkie potrzebne paczki są już w tym repozytorium, aczkolwiek można użyć dowolnych.
>
> ## Na czym polega bug?
>
> Dla każdej pobieranej kategorii, w parametrze **Title** moze być zawarta opcjonalna numeracja która powinna definiować kolejność zwracaną przez funkcje (w polu **order**).
> Na ten moment sortowanie działa nieprawidłowo, należy to poprawić.
>
> > Dla wejścia znajdującego się w pliku **input.ts**, w tym momencie funkcja zwraca takie wyjście jak w pliku **currentResult.ts**. Oczekiwane wyjście zawarte jest w pliku **correctResult.ts**
>
> ## Jak używać tego repo?
>
> Najważniejsza komenda dla tego zadania to **npm run test** - buduje ona TSa i odpala testy. Ta komenda się wywali jeśli kod nie przejdzie eslinta i prettiera. Zatem żeby sprawdzić swoje zadanie należy najpierw pozbyć się błędów z eslinta i odpalić **fix:prettier**.