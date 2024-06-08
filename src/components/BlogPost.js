import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <div className="post-meta">
        <span>{post.date}</span> | <span>{post.author}</span>
      </div>
      <img src={post.image} alt={post.title} className="food-image" />
      <p>{post.content}</p>
      <hr />
    </div>
  );
};

export default BlogPost;
