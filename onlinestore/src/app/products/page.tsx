"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home = () => {
  const { isLoading, error, data } = useQuery<any, Error, Product[]>({
    queryKey: ["prodData"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/products").then((res) => res.data),
  });

  const [searchInput, setSearchInput] = useState<string>("");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  let products: Product[] = [];

  if (data) {
    products = [...data];
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search products..."
      />
      {filteredProducts.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ width: "auto", height: "auto" }}
              />
              {product.title}
              {product.price}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
