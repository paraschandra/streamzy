import React, { useState, useEffect } from 'react'
import Videos from '../Videos/Videos';
import { fetchFromAPI } from '../../utils/fetchAPI';

const Feed = ({category}) => {  
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${category}`)
    .then((data) => setVideos(data.items))
  }, [category])

  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col md:flex">
            <div className="absolute w-full h-full py-16 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 scroll-smooth overflow-auto 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="text-md max-md:text-center py-2 px-4 font-semibold dark:text-white">
                  {category} <span className='text-blue-500'>videos</span>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default Feed