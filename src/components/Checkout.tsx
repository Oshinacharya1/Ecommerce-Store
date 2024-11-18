// Checkout.tsx
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";

const CheckoutContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();

  // to calculate the total price of all items in the cart array by using the reduce method, initial value of an array is 0
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  // Handle order placement
  const handlePlaceOrder = () => {
    alert("Order Placed! Thank you for your purchase!");
    clearCart(); // Clear the cart after placing the order
  };

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem key={product.id}>
              <p>{product.title}</p>
              <p>${product.price}</p>
            </CartItem>
          ))}
          <TotalPrice>
            <p>Total: ${total}</p>
          </TotalPrice>
          <Button onClick={handlePlaceOrder}>Place Order</Button>
        </>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
