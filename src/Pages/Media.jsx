import React from 'react';
import { MediaInformations } from '../constants/data';
import { Card2 } from '../components/Card2';

export const Media = () => {
  return (
    <div className='w-[80%] mx-auto space-y-2'>
      <h1 className='text-4xl font-bold'> Media</h1>
      <p>Informasi seputar Padi UMKM</p>
      <div className='flex items-center justify-between py-8 space-x-6'>
        {MediaInformations.map((item, index) => (
          <Card2
            key={item.title + index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
