import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const cartProducts = useSelector((state: RootState) => state.cart);

  const cartItemCount = cartProducts.length;

  return (
    <header className='site-header bg-blue-600 px-10 py-4 text-white'>
      <div className='container mx-auto'>
        <div className='header-wrapper flex justify-between'>
          <Link className='text-lg' href='/'>
            OnlineStore
          </Link>
          <div>
            <Link className='relative' href='/cart'>
              <FaShoppingCart className='h-[24px] w-[24px]' />{' '}
              <span className='absolute right-[-5px] top-[-8px] flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-xs text-white'>
                {cartItemCount}
              </span>
            </Link>

            <ul>
              {cartProducts.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
