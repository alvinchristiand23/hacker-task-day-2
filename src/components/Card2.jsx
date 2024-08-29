import React from 'react';

export const Card2 = ({ image, title, description }) => {
  return (
    <div className='space-y-4 w-96'>
      <img src={image} alt={title} className='rounded-lg w-96' />
      <h1 className='text-lg font-bold'>{title}</h1>
      <p className='text-sm leading-relaxed'>{description}</p>
    </div>
  );
};
