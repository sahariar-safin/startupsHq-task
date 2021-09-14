import axios from "axios";

export const getPosts = async () =>
    await axios.get("https://jsonplaceholder.typicode.com/posts");

export const getPost = async (postID) =>
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${ postID }`);

export const getComment = async () =>
    await axios.get("https://jsonplaceholder.typicode.com/comments/");