import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    post: [],
    comments: []
  },
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    setComments: (state, { payload }) => {
      const comment = payload.data.filter(comment => comment.postId === Number(payload.id));
      state.comments = comment;
    },
    setPost: (state, { payload }) => {
      state.post = payload;
    },
  },
});

export const { setPosts, setComments, setPost } = postSlice.actions;
export default postSlice.reducer;
