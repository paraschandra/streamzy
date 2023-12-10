import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../utils/fetchAPI'
import { useParams } from 'react-router-dom';
import Videos from '../Videos/Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col md:flex">
            <div className="absolute w-full h-full py-16 px-2 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 scroll-smooth overflow-auto 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="text-md max-md:text-center font-semibold dark:text-white">
                  Search <span className='text-blue-500'>result:</span>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default SearchFeed