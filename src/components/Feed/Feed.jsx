import React from 'react'
import InputBox from './InputBox'
import { PostCard } from './PostCard'

function Feed() {
    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <InputBox />
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )
}

export default Feed