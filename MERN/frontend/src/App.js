import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostEdit from './components/PostEdit';


export default function App() {
return (
<div className="container">
<NavBar />
<Routes>
<Route path="/" element={<PostList />} />
<Route path="/add" element={<PostForm />} />
<Route path="/edit/:id" element={<PostEdit />} />
</Routes>
</div>
);
}