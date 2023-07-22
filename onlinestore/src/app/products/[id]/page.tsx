"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add } from "@/app/store/cartSlice";
import Header from "@/app/components/Header";

interface HomeProps {
  params: {
    id: number;
  };
}

const ProductDetails = ({ params }: HomeProps) => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery(["product", params.id], () =>
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.data)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred";

  const addToCart = (product: any) => {
    dispatch(add(product));
  };

  return (
    <>
      <Header />
      <div>
        {data && (
          <div key={data.id}>
            <Image
              src={data.image}
              width={100}
              height={100}
              alt="Picture of the author"
              style={{ width: "auto", height: "auto" }}
            />
            {data.title}
            {data.description}
          </div>
        )}
        <button onClick={() => addToCart(data)}>add to</button>
      </div>
    </>
  );
};

export default ProductDetails;
