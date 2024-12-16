import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import blog from '../../assets/blog.jpg'
import TopBlogs from '../Blog/TopBlogs'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
         {/* Logo Image */}
      <div className="logo-container">
        <Link to="/">
          <img src={blog} alt="Logo" className="logo-image" />
        </Link>
      </div>
         <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/write">Publish Post</Link></li>
                <li><Link to="/topblogs">Must-Read News</Link></li>
            </ul>
         </nav>
    </div>
    </>
  )
}

export default Navbar