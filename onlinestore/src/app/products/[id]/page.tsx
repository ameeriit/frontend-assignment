"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

interface HomeProps {
  params: {
    id: number;
  };
}

const ProductDetails = ({ params }: HomeProps) => {
  const { isLoading, error, data } = useQuery(["product", params.id], () =>
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.data)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred";

  return (
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
    </div>
  );
};

export default ProductDetails;
