import React, { useEffect, useState } from 'react'
import './Blog.css';
import { deletePost, getAllPosts, BasedUrl } from '../Api/PostApi';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
     const fetchPosts = async() => {
      try{
          const response = await getAllPosts();
          setPost(response.data);
          setLoading(false);
          //console.log(response.data);
          
      }catch(error){
          //console.log("Error", error);
          setError("Failed to fetch data");
          setLoading(false);
      }
     }
     fetchPosts();
  }, []);
  
  const truncateContent = (content, wordLimit) => {
    const word = content.split(' ')
    if(word.length > wordLimit){
      return word.slice(0, wordLimit).join(' ') + '....';

    }

    return content;
  }

 // Handle View Click
const handleViewClick = (postId) => {
  navigate(`/posts/${postId}`)
  
}

// Handle Delete Click
const handleDeleteClick = async(id) => {
  try{
     await deletePost(id);
     setPost(posts.filter((post) => post._id !== id))
  }catch(error){
    console.log("Error deleting post", error);
    
  }
}

// Handle Edit Click
const handleEditClick = (id) => {
  navigate(`/editposts/${id}`)
}

   
  return (
    <>
    <div className='container'>
      <h1>Welcome to My Blog</h1>
      <h4>Explore Insights, Ideas, and Stories</h4>
      <p>{posts.length} Posts Available</p>
     
      {

        posts.map((post) => (
          <div key={post._id}>

          <div className="articles">
            <div className="postarea">
            <h2>{post.title}</h2>
            {/* <h2>{post._id}</h2> */}
              <h3>{post.subtitle}</h3>
              <p>{truncateContent(post.content,50)}</p>
              <p><b> Category:</b>{post.category}</p>
              <div className='button-container'>
              <button className='button button-view' onClick={()=>handleViewClick(post._id)}>View</button>
              <button className='button button-edit' onClick={()=>handleEditClick(post._id)}>Edit</button>
              <button className='button button-delete' onClick={()=>handleDeleteClick(post._id)}>Delete</button>
              </div>
             
            </div>
              <div className="postimage">
              <img src={`${BasedUrl}${post.image}`} />
              </div>
          </div>
        
          </div>
        ))
      }
    </div>   
    </>
  )
}

export default Blog