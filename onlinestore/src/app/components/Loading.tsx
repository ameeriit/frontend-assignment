import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div>
      <Image
        className='absolute left-[50%] top-[30%] mx-auto translate-x-[-50%] translate-y-[50%]'
        src='/loading.gif'
        width={100}
        height={100}
        alt='loading.gif'
      />
    </div>
  );
};

export default Loading;
