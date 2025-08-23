import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import useGlobalStore from '../../store/store';

const ProductList = () => {

  const products = useGlobalStore((state) => state.products);
  const state = useGlobalStore();
  console.log("ProductList Rendered", state);



  return (
    <div className="flex flex-wrap gap-8 justify-around">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
