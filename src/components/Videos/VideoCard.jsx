import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from '../../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='w-96 md:w-[358px] flex-col p-2 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl transition-all duration-300 lg:hover:scale-95'>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        className='w-full md:w-[358px] h-48 md:h-[196px] rounded-lg object-cover'/>
      </Link>

      <div className='h-16 p-2'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <p className='text-xs dark:text-white font-medium'>
            {snippet?.title.slice(0, 90) || demoVideoTitle.slice(0, 90)}
          </p>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <p className='mt-1 text-xs text-gray-600 dark:text-gray-400'>
            {snippet?.channelTitle || demoChannelTitle}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard