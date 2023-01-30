import React, { ReactNode, useEffect, useState } from 'react';
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import useSpotify from '../../hooks/useSpotify';

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlayList(data?.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen'>
      <div className='space-y-4'>
        <button
          type='button'
          className='flex items-center space-x-2 hover:text-white'
          onClick={() => signOut()}
        >
          <p>Log out</p>
        </button>
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

        {playList.map((playItem) => (
          <p key={playItem.id} className='cursor-pointer hover:text-white'>
            {playItem.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;