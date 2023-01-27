import React from 'react';
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <button type='button' className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button type='button' className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button type='button' className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-900' />

        <button type='button' className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create PlayList</p>
        </button>
        <button type='button' className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Liked Songs</p>
        </button>
        <button type='button' className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Your episodes</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-900' />

        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
        <p className='cursor-pointer hover:text-white'>Play List name ....</p>
      </div>
    </div>
  );
};

export default Sidebar;
