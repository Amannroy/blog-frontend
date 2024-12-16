import axios from 'axios';

export const BasedUrl = 'https://9tpcwx-5000.csb.app/';
const addUrl = 'https://9tpcwx-5000.csb.app/api/posts';

export const createPost = (newPost) => axios.post(`${addUrl}/add`, newPost) 
export const getAllPosts = () => axios.get(`${addUrl}/view`)
export const getPostById = (id) => axios.get(`${addUrl}/view/${id}`)
export const deletePost = (id) => axios.delete(`${addUrl}/delete/${id}`)
export const updatePost = (id, updatePost) => axios.patch(`${addUrl}/update/${id}`, updatePost)