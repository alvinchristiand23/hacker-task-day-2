import React from 'react';

export const Contact = () => {
  return (
    <div className='w-[80%] mx-auto py-20'>
      <h1 className='mb-2 text-4xl font-bold'>Hubungi Kami</h1>
      <p>Memiliki pertanyaan lebih lanjut seputar Padi UMKM?</p>
      <p>Silahkan menghubungi Kami secara langsung</p>
      <div className='flex items-center justify-center flex-1 pt-4 space-x-6'>
        <div className='flex flex-col flex-1 p-8 border-2 rounded-lg'>
          <h2 className='mb-4 text-xl font-bold'>Layanan informasi Pengguna</h2>
          <h3 className='mt-4 font-bold text-md'>Email</h3>
          <p>cs@padiumkm.id</p>
          <h3 className='mt-4 font-bold text-md'>Whatsapp</h3>
          <p>+62 812 9000 7820</p>
          <h3 className='mt-4 font-bold text-md'>Senin - Jumat | 08:00 - 17:00 WIB</h3>
        </div>
        <div className='flex flex-col flex-1 p-8 border-2 rounded-lg '>
          <h2 className='text-xl font-bold'>Kantor Kami</h2>
          <h3 className='font-bold text-md'>Padi UMKM Headquarters</h3>
          <h4>Gedung Telkom Direktorat Business and Technology</h4>
          <p>Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia</p>
        </div>
      </div>
    </div>
  );
};
