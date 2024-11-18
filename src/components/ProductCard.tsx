import React from "react";
import { Product } from "../contexts/CartContext"; // confirm Product type in CartContext
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  width: 220px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </CardContainer>
  );
};

export default ProductCard;
