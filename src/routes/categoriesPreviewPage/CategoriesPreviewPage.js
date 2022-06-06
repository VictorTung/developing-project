import React from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/reducerSlices/categoryReducer";
import CategoriesPreview from "../../components/categoriesPreview/CategoriesPreview";

function CategoriesPreviewPage() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoriesPreview key={title} products={products} title={title} />;
      })}
    </>
  );
}

export default CategoriesPreviewPage;
