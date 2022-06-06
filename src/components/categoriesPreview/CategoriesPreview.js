import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";

function CategoriesPreview({ title, products }) {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-5 capitalize">
        <Link to={title} className="cursor-pointer">
          {title}
        </Link>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-12">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
}

export default CategoriesPreview;
