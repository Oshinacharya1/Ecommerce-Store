import React from "react";
import { useProducts } from "../hooks/useProducts";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Product } from "../contexts/CartContext";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const ProductList: React.FC = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <ProductContainer>
      {data?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductContainer>
  );
};

export default ProductList;
