import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Home/Navbar'
import PostCard from '../components/Home/PostCard';
import { getPostsAndSet } from '../state/action/postAction';

function Home() {
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.post);
    useEffect(async () => {
        await dispatch(getPostsAndSet());
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container  mx-auto">
                <div className="flex flex-wrap justify-content-between pt-5">
                    {posts.map((post, index) => <PostCard post={post} />)}
                </div>
            </div>
        </div>
    )
}

export default Home
