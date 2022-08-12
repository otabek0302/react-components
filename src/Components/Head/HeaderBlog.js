import React from "react";
import './Header_Blog.css';
const HeaderBlog = ({ title }) => {
     return (
          <div className="head_blog">
               <span className="logo">Gigy Blog</span>
               <h1>{ title }</h1>
          </div>
     );
};

export default HeaderBlog;
