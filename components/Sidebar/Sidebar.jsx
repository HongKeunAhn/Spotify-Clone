import React, { useEffect, useState } from 'react';
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import useSpotify from '../../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playListIdState } from '../../store';

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playList, setPlayList] = useState([]);
  const [playListId, setPlayListId] = useRecoilState(playListIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlayList(data?.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div
      className='text-gray-500 p-5 text-xs lg:text-sm border-r 
    border-gray-900 overflow-y-scroll scrollbar-hide h-screen 
    sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex'
    >
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

        {playList.map((playItem) => (
          <p
            key={playItem.id}
            className='cursor-pointer hover:text-white'
            onClick={() => setPlayListId(playItem.id)}
          >
            {playItem.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
