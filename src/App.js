import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BlogList from './components/BlogList';
import Contact from './components/Contact';
import NewPostForm from './components/NewPostForm';
import TopBar from './components/TopBar';

import FoodImage1 from './assets/food1.jpg';
import FoodImage2 from './assets/food2.jpeg';
import FoodImage3 from './assets/food3.jpg';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to My Food Blog',
      date: 'June 1, 2024',
      author: 'John Doe',
      content: 'This is the first post on my food blog!',
      image: FoodImage1
    },
    {
      id: 2,
      title: 'My Favorite Recipes',
      date: 'June 2, 2024',
      author: 'Jane Smith',
      content: 'Here are some of my favorite recipes...',
      image: FoodImage2
    },
    {
      id: 3,
      title: 'Delicious Desserts',
      date: 'June 3, 2024',
      author: 'Chef Alex',
      content: 'Let’s explore some delicious dessert recipes...',
      image: FoodImage3
    }
  ]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <Router>
      <div className="App">
        <TopBar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <NewPostForm addPost={addPost} />
                <BlogList posts={posts} />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
