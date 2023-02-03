import React from 'react'
import InputBox from './InputBox'
import Post from './Post'

function Feed() {
    return (
        <div className="flex  space-y-6  flex-col flex-[0.6] max-[800px]:flex-[1]">
            <InputBox />
            {/* <Post /> */}
        </div>
    )
}

export default Feed