// select
import { createSelector } from "reselect";

// types
const CATEGORY_ACION_TYPES = {
  SET_CATEGORIES: "category/SET_CATEGORIES",
};

// reducer
const INITIAL_STATE = {
  categories: [],
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

// select
const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

// action
export const setCategories = (categories) => {
  return { type: CATEGORY_ACION_TYPES.SET_CATEGORIES, payload: categories };
};
