import React from 'react'
import PostItem from './PostItem'

export default function PostList({ list }) {
  return (
    <ul>
      {list.map((post) => {
        return <PostItem key={post.id}
          topics={post.topics}
          text={post.text}
          timeStamp={post.timeStamp}
          image={post.image}
        />
      })}
    </ul>
  )
}
