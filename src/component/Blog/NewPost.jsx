import React, { useState } from "react";
import "./Blog.css";
import { createPost } from "../Api/PostApi";

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handles file input properly
    }));
  };

  // Form Data Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    Object.keys(formData).forEach((key) => {
      postData.append(key, formData[key]);
    });

    try {
      await createPost(postData);
      alert("Post Created SuccessFully");
      setFormData({
        title: "",
        subtitle: "",
        content: "",
        category: "",
        image: null,
      });
    } catch (error) {
      console.log("Error Posting", error);
      alert("Error in creating post");
    }
  };

  return (
    <>
      <div className="myPost">
        <h1>Create New Post</h1>

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
            <option value="others">Others</option>
          </select>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
