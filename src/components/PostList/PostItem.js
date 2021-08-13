import React from 'react'
import moment from 'moment';

export default function PostItem({ topics, text, timeStamp, image }) {
  return (
    <li

      className="flex py-5 space-x-4 border-b border-gray-300"
    >
      <div className="flex-1">
        <div className="text-gray-600 font-bold">
          {topics.join(' ')}
        </div>
        <div className="font-bold mb-2">{text}</div>
        <div className="text-gray-400">
          {moment(timeStamp).format('D MMM YYYY, h:mm A')}
        </div>
      </div>
      <div className="w-16 md:w-20">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt={text}
            className=" absolute w-full h-full"
          />
        </div>
      </div>
    </li>
  )
}
