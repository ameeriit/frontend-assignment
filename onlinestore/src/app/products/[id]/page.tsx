'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { add } from '@/app/store/cartSlice';
import Header from '@/app/components/Header';
import Loading from '@/app/components/Loading';

interface HomeProps {
  params: {
    id: number;
  };
}

const ProductDetails = ({ params }: HomeProps) => {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery(['product', params.id], () =>
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.data)
  );

  if (isLoading) return <Loading />;

  if (error)
    return (
      <div className='absolute left-[50%] top-[30%] mx-auto translate-x-[-50%] translate-y-[50%]'>
        <p>An Error Has Occurred</p>
      </div>
    );

  const addToCart = (product: any) => {
    dispatch(add(product));
  };

  return (
    <>
      <Header />
      <section className='singleproduct-section py-12'>
        <div className='container mx-auto px-8'>
          <div className='singleproduct-wrapper'>
            {data && (
              <div className='mb-4' key={data.id}>
                <Image
                  className='mb-8'
                  src={data.image}
                  width={100}
                  height={100}
                  alt='Picture of the author'
                  style={{ width: 'auto', height: 'auto' }}
                />
                <p className='mb-2 font-semibold'>{data.title}</p>
                <p className='font-bold'>${data.price}</p>
                <p>{data.description}</p>
              </div>
            )}
            <button
              className='hover: rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition-all hover:bg-green-600'
              onClick={() => addToCart(data)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
