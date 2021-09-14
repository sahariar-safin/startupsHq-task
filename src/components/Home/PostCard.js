import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ post }) {
    return (
        <div class="max-w-sm mt-3 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1 mr-1.5">
            <div class="md:flex">
                <div class="p-8">
                    <h5 class="block mt-1 text-lg leading-tight font-medium text-black">
                        {post?.title}
                    </h5>
                    <p class="mt-2 text-gray-500">
                        {post?.body.slice(0, 60)}...
                    </p>
                    <Link to={`/post/${ post?.id }`}>
                        <button class="uppercase tracking-wide text-sm text-purple-500 font-bold">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
