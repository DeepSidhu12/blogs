import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} className="food-image" />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
