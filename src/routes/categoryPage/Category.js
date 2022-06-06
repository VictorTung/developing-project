import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/reducerSlices/categoryReducer";
import ProductCard from "../../components/productCard/ProductCard";

function Category() {
  console.log("category render/ re-render");
  const { category } = useParams("category");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="text-3xl mt-8 mb-5 capitalize text-center">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-12">
        {products && products.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </>
  );
}

export default Category;
