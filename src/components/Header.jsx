import React from 'react';
import { navItems } from '../constants/data';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold underline'>Task: Day 2 - React Router</h1>
      <nav className='flex flex-row items-center justify-center gap-x-20'>
        {navItems.map((item, index) => (
          <Link key={item.path + index} to={item.path}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
