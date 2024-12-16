import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blog from './component/Blog/Blog';
import NewPost from './component/Blog/NewPost';
import Footer from './component/Footer/Footer';
import PostDetails from './component/Blog/PostDetails';
import EditPost from './component/Blog/EditPost';
import TopBlogs from './component/Blog/TopBlogs';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Blog/>} />
      <Route path="/write" element={<NewPost/>} />
      <Route path="/posts/:id" element={<PostDetails/>} />
      <Route path="/editposts/:id" element={<EditPost/>} />
      <Route path="/topblogs" element={<TopBlogs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App