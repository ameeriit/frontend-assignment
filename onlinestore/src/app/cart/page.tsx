'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '../store/store';
import Header from '../components/Header';

interface Product {
  id: number;
  image: string;
  title: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

const Cart: React.FC = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart
  ) as Product[];

  return (
    <div>
      <Header />
      <section className='cart-section py-8'>
        <div className='container mx-auto px-8'>
          <div className='cart-wrapper'>
            <h2 className='text-center text-[24px] font-bold'>Your Cart:</h2>
            {cartProducts.length === 0 ? (
              <p className='py-4 text-center text-[20px] font-semibold'>
                Your cart is empty!
              </p>
            ) : (
              <ul className='grid grid-cols-1 gap-x-20 gap-y-20 py-12 sm:grid-cols-2 md:grid-cols-3'>
                {cartProducts.map((product) => (
                  <li
                    className='rounded-lg border-[2px] border-black px-8 py-12 hover:shadow-2xl'
                    key={product.id}
                  >
                    <Image
                      className='mx-auto mb-4'
                      src={product.image}
                      width={100}
                      height={100}
                      alt='Product Image'
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <p className='mb-2'>{product.title}</p>
                    <strong>${product.price}</strong>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
