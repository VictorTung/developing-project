import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoriesPreviewPage from "../categoriesPreviewPage/CategoriesPreviewPage";
import Category from "../categoryPage/Category";

import { setCategories } from "../../store/reducerSlices/categoryReducer";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route index element={<CategoriesPreviewPage />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default Shop;
