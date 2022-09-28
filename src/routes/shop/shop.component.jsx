import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, title }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </div>
  );
};

export default Shop;
