import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeFromCart,
} from "../features/cart/cartSlice";
import { Table, Button } from "react-bootstrap";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("Cart ", cart);
  const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={item.id}>
              <td>{item.product_name}</td>
              <td>${item.price}</td>
              <td>
                <Button size="sm" onClick={() => dispatch(decrement(item.id))}>
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button size="sm" onClick={() => dispatch(increment(item.id))}>
                  +
                </Button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}


