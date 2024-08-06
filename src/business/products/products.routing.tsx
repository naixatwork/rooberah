import { Route, Routes } from 'react-router-dom';
import ProductsList from '#/business/products/products-list/productsList.tsx';

const ProductsRouting = () => {
  return (
    <Routes>
      <Route index element={<ProductsList />} />
    </Routes>
  );
};

export default ProductsRouting;
