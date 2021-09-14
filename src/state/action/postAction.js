import { getPosts, getPost, getComment } from "../../api/post";
import { setPosts, setComments, setPost } from "../reducers/postSlice";

export const getPostsAndSet = () => async (dispatch) => {
    try {
        const { data } = await getPosts();
        dispatch(setPosts(data));
    } catch (error) {
        console.error(error.message);
    }
}

export const getPostAndSet = (postID) => async (dispatch) => {
    try {
        const { data } = await getPost(postID);
        dispatch(setPost(data));
    } catch (error) {
        console.error(error.message);
    }
}

export const getCommentAndSet = (id) => async (dispatch) => {
    console.log(id, "have a relax")
    try {
        const { data } = await getComment();
        dispatch(setComments({ data, id }));
    } catch (error) {
        console.error(error.message);
    }
}