import React, { useEffect, useState } from 'react'
import Videos from '../Videos/Videos'
import ChannelCard from '../Channel/ChannelCard';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchAPI';

const ChannelFeed = () => {
  const [channel, setChannel] = useState();
  const [videos, setVideos] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannel(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col items-center justify-center md:flex">
            <div className="absolute w-full h-full flex-col py-16 px-2 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 scroll-smooth overflow-auto 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="text-md max-md:text-center flex justify-center my-6 py-4 px-2 
                  font-semibold dark:text-white shadow-md rounded-xl">
                   <ChannelCard channel={channel}/>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default ChannelFeed