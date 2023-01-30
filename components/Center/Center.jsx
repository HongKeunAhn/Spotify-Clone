import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playListState, playListIdState } from '../../store';
import useSpotify from '../../hooks/useSpotify';
import { Songs } from '../Songs';

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
];

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState('');
  const playListId = useRecoilValue(playListIdState);
  const [playList, setPlayList] = useRecoilState(playListState);

  useEffect(() => setColor(shuffle(colors).pop()), [playListId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playListId)
      .then((data) => {
        console.log(data);
        setPlayList(data.body);
      })
      .catch((error) => console.error(error));
  }, [spotifyApi, playListId]);

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
      <header className='absolute top-5 right-8'>
        <div
          className='flex items-center bg-black space-x-3 opacity-90 
        hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white'
        >
          <img
            className='rounded-full w-190 h-10'
            src={session?.user?.image ?? 'https://links.papareact.com/9xl'}
            alt={session?.user?.name}
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className='w-5 h-5' />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          className='w-44 h-44 shadow-2xl'
          src={playList?.images?.[0]?.url}
          alt={playList?.name}
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>{playList?.name}</h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
