import instance from '@/config/axios';

// Fetch All Posts
export const fetchAllPosts = ({ page, postsPerPage }) =>
  instance.get(`/posts?_sort=id&_order=desc&_page=${page}&_limit=${postsPerPage}`);

// Fetch a Post
export const fetchPost = id => instance.get(`/posts/${id}`);

// Delete Post
export const deletePost = id => instance.delete(`/posts/${id}`);

// Add Post
export const addPost = newPost => instance.post('/posts', newPost);

// Edit Post
export const editPost = (id, fields) => instance.patch(`/posts/${id}`, fields);

const API = { fetchAllPosts, fetchPost, deletePost, addPost, editPost };

export default API;
