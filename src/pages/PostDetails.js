import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Navbar from '../components/Home/Navbar'
import CommentCard from '../components/ProductDetails/CommentCard';
import { getCommentAndSet, getPostAndSet } from '../state/action/postAction';

function PostDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { post, comments } = useSelector(state => state.post);
    useEffect(async () => {
        await dispatch(getPostAndSet(id));
        await dispatch(getCommentAndSet(id));
    }, [id])
    return (
        <div>
            <Navbar />
            <div className="container mx-auto pt-8">
                <h3 class="block text-center mt-1 text-4xl leading-tight font-medium text-black">
                    {post?.title}
                </h3>
                <p class="mt-2 text-center text-gray-500">
                    {post?.body}
                </p>
                <h4 className="text-3xl pt-6">Comments:</h4>
                <div className="pt-8">
                    {comments?.map((comment, index) => <CommentCard comment={comment} />)}
                </div>
            </div>
        </div>
    )
}

export default PostDetails
