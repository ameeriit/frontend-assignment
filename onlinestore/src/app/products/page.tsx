'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../components/Loading';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home = () => {
  const { isLoading, error, data } = useQuery<any, Error, Product[]>({
    queryKey: ['prodData'],
    queryFn: () =>
      axios.get('https://fakestoreapi.com/products').then((res) => res.data),
  });

  const [searchInput, setSearchInput] = useState<string>('');

  if (isLoading) return <Loading />;

  if (error)
    return (
      <div className='absolute left-[50%] top-[30%] mx-auto translate-x-[-50%] translate-y-[50%]'>
        <p>An Error Has Occurred</p> + error.message
      </div>
    );

  let products: Product[] = [];

  if (data) {
    products = [...data];
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className='product-section px-10 py-6'>
      <div className='container mx-auto'>
        <div className='search-wrapper'>
          <input
            className='mb-8 w-full rounded-md border-[1px] border-black px-6 py-2 outline-none'
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder='Search products here...'
          />{' '}
          <div className='products grid grid-cols-1 gap-x-20 gap-y-20 sm:grid-cols-2 md:grid-cols-3'>
            {filteredProducts.map((product) => {
              return (
                <Link
                  className='rounded-lg border-[2px] border-black px-8 py-12 hover:shadow-2xl'
                  href={`/products/${product.id}`}
                  key={product.id}
                >
                  <Image
                    className='mx-auto mb-8 object-contain sm:h-[200px] sm:w-[150px] md:h-[250px] md:w-[200px]'
                    src={product.image}
                    width={100}
                    height={150}
                    alt='Picture of the author'
                  />
                  <p className='mb-4 font-[16px]'>{product.title}</p>
                  <p className='text-[16px] font-semibold'>
                    Rs. {product.price}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
