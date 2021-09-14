import React from 'react'

function CommentCard({ comment }) {
    console.log(comment)
    return (
        <div class="mb-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x">
            <div class="md:flex">
                <div class="p-8">
                    <h5 class="block mt-1 text-lg leading-tight font-medium text-black">
                        {comment?.name}
                    </h5>
                    <h5 class="block mt-1 text-sm text-gray-500 leading-tight font-medium text-black">
                        {comment?.email}
                    </h5>
                    <p class="mt-2 text-gray-500">
                        {comment?.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
