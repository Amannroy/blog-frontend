import React, { useEffect, useState } from 'react'
import { getPostById, updatePost } from '../Api/PostApi'
import { useNavigate, useParams } from 'react-router-dom'


const EditPost = () => {

  const navigation = useNavigate();

    const {id: postId} = useParams()

    const [formData,setFormData] = useState({

        title:'',
        subtitle:'',
        content:'',
        category:'',
        image:'null'
    })
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetching data by id(First need to show the data in the form)
    useEffect(() => {
         const fetchPost = async() => {
            try{
               const response = await getPostById(postId);
              //  console.log(response.data.title);
               setFormData({
                title: response.data.title || '',
                subtitle: response.data.subtitle || '',
                content: response.data.content || '',
                category: response.data.category || '',
                image: response.data.image || 'null'      
               })
               setLoading(false);
            }catch(error){
              console.error("Error to fetch posts, error");
              setError("Failed to fetch");
              setLoading(false);       
               
            }
         }
         fetchPost()
    }, [postId])

  const handleChange = (e) => {
       const {name, value} = e.target;
       setFormData((prevData) => ({
        ...prevData,
        [name] : value
       }))
  }

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0]
    }))
  }

  const handleSubmit = async(e) => {

       e.preventDefault();
       const formDataToSend = new FormData();
       formDataToSend.append('title', formData.title);
       formDataToSend.append('subtitle', formData.subtitle);
       formDataToSend.append('content', formData.content);
       formDataToSend.append('category', formData.category);
       

       if(formData.image){
        formDataToSend.append('image', formData.image);
       }

       try{
          const response = await updatePost(postId, formDataToSend);
          console.log(response);
          alert("Data Submitted");
          navigation('/')
          
       }catch(error){
          console.log("Error to update post", error);
          setError("Failed to update");
          
       }
  }

  return (
    <>
  <div className="myPost">
        <h1>Update Post</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subtitle"
            placeholder="Enter SubTitle"
            value={formData.subtitle}
            onChange={handleChange}
          />

          <textarea
            name="content"
            placeholder="Enter Content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="express">ExpressJs</option>
            <option value="python">Python</option>
            <option value="django">Django</option>
            <option value="java">Java</option>
            <option value="angular">Angular</option>
            <option value="mongodb">MongoDB</option>
            <option value="mysql">MySQL</option>
            <option value="react">React</option>
            <option value="next">NextJs</option>
          </select>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default EditPost