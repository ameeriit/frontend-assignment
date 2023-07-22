import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Import the RootState type

const Header = () => {
  const cartProducts = useSelector((state: RootState) => state.cart);

  // Calculate the total number of items in the cart
  const cartItemCount = cartProducts.length;

  return (
    <div>
      <Link href="/cart">Cart {cartItemCount}</Link>
      {/* If you want to display the cart items' names, you can do something like this: */}
      <ul>
        {cartProducts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
