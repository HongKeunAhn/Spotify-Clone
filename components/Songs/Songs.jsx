import React from 'react';
import { useRecoilValue } from 'recoil';
import { playListState } from '../../store';
import Song from './Song';

const Songs = () => {
  const playList = useRecoilValue(playListState);
  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {playList?.tracks.items.map((track, index) => (
        <Song key={track.track.id} track={track} order={index} />
      ))}
    </div>
  );
};

export default Songs;
