import React, { useEffect, useState } from 'react'
import Videos from '../Videos/Videos'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchAPI';

const VideoFeed = () => {
  const [videos, setVideos] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoData(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if(!videoData?.snippet) return <div className="h-full flex items-center justify-center text-xl dark:text-white">Loading...</div>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoData;
  
  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col md:flex">
            <div className="absolute w-full h-full px-4 py-16 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 overflow-auto scroll-smooth 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="flex justify-center w-full h-2/5 lg:h-full text-md max-md:text-center my-2 py-4 md:px-6
                  font-semibold dark:text-white shadow-md rounded-xl border-b-2 dark:border-neutral-700">
                   <div className="relative w-full aspect-video py-2 mx-4">
                    <ReactPlayer className="!w-full !h-full absolute"
                      url={`https://www.youtube.com/watch?v=${id}`} controls />
                   </div>
                </div>
                <div className="my-4 px-4 md:px-6 py-6 border-2 dark:border-neutral-700 rounded-lg shadow-md">
                  <div className="text-sm md:text-md font-medium dark:text-white flex-col md:flex justify-between">
                    <div className="">
                      {title} <br/>
                      <Link to={`/channel/${channelId}`}>
                        <p className='font-normal'>{channelTitle}</p>
                      </Link>
                    </div>
                    <div className="pt-4 md:pt-0 md:text-right text-xs md:text-sm">
                      <p className=''>{parseInt(viewCount).toLocaleString()} views</p>
                      <p>{parseInt(likeCount).toLocaleString()} likes</p>
                    </div>
                  </div>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default VideoFeed