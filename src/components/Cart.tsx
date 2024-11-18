import React from "react";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";

const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    margin: 0;
    font-size: 16px;

    &:first-child {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const TotalContainer = styled.div`
  text-align: right;
  margin-top: 20px;

  h3 {
    margin: 0 0 15px;
    font-size: 20px;
  }
`;

// used React Functional Component to updateQuantity, removeFromCart, and clearCart
const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  // used to calculate the total cost of all the items in the shopping cart
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1), // Multiplies the price by the quantity of the item in the cart. If quantity is not defined, it defaults to 1.
    0
  );

  const handleCheckout = () => {
    // Show order details on a checkout page
    const orderSummary = cart
      .map((item) => `${item.title} (x${item.quantity || 1})`)
      .join(", ");
    alert(
      `Order Summary: ${orderSummary}\nTotal: $${total}\nThank you for your purchase!`
    );

    clearCart(); // Clear the cart after confirmation
  };
  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails>
            <p>{item.title}</p>
            <p>${item.price.toFixed(2)}</p>
          </ItemDetails>
          <div>
            <QuantityInput
              type="number"
              value={item.quantity || 1}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value) || 1)
              }
            />
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        </CartItem>
      ))}
      {cart.length > 0 && (
        <TotalContainer>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Button onClick={handleCheckout}>Proceed to Checkout</Button>
        </TotalContainer>
      )}
    </CartContainer>
  );
};

export default Cart;
