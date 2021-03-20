import instance from '@/config/axios';

// Delete Post
export const deletePost = id => instance.delete(`/posts/${id}`);

// Fetch All Posts
export const fetchAllPosts = ({ page, postsPerPage }) =>
  instance.get(`/posts?_sort=id&_order=desc&_page=${page}&_limit=${postsPerPage}`);

// Fetch a Post
export const fetchPost = id => instance.get(`/posts/${id}`);

// Add Post
export const addPost = newPost => instance.post('/posts', newPost);

const API = { deletePost, fetchAllPosts, fetchPost, addPost };

export default API;
