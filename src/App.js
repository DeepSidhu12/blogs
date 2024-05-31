import React, { useState } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import NewPostForm from './components/NewPostForm';

import FoodImage1 from './assets/food1.jpg';
import FoodImage2 from './assets/food2.jpeg';
import FoodImage3 from './assets/food3.jpg';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to My Food Blog',
      content: 'This is the first post on my food blog!',
      image: FoodImage1
    },
    {
      id: 2,
      title: 'My Favorite Recipes',
      content: 'Here are some of my favorite recipes...',
      image: FoodImage2
    },
    {
      id: 3,
      title: 'Delicious Desserts',
      content: 'Let’s explore some delicious dessert recipes...',
      image: FoodImage3
    }
  ]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <div className="App">
      <header>
        <h1>Food Blog</h1>
      </header>
      <main>
        <NewPostForm addPost={addPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
};

export default App;
