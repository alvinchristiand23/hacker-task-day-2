import React from 'react';
import { navItems } from '../constants/data';
import { Link } from 'react-router-dom';
import PadiUMKLogo from '../assets/images/padiUMKM.png';

export const Header = ({ isLogin, onClick }) => {
  return (
    <div className='flex w-[80%] mx-auto py-4 items-center'>
      <img src={PadiUMKLogo} alt='Padi UMKM' width={117} height={64} className='mr-28' />
      <nav className='flex flex-row items-center justify-center mr-10 space-x-10'>
        {navItems.map((item, index) => (
          <Link key={item.path + index} to={item.path} className='text-lg font-medium'>
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={onClick}
        className='px-2 py-1 hover:text-white hover:bg-[#019EA9] border rounded-md font-base text-[#019EA9] border-[#019EA9]'
      >
        {isLogin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};
