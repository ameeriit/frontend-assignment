"use client";

// Import necessary modules and types
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "../store/store";

// Define the type for a single product item
interface Product {
  id: number;
  image: string;
  title: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the type for the cartProducts state
interface CartState {
  cart: Product[]; // An array of Product items
}

const Cart: React.FC = () => {
  // Access the cartProducts state using useSelector and provide the RootState type
  const cartProducts = useSelector(
    (state: RootState) => state.cart
  ) as Product[]; // Assert the type to be an array of Product

  return (
    <div>
      <h2>Your Cart:</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt="Product Image"
                style={{ width: "auto", height: "auto" }}
              />
              <p>{product.title}</p>
              <strong>{product.name}</strong> - ${product.price} (Qty:{" "}
              {product.quantity})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
