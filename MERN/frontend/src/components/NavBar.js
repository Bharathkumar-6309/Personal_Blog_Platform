import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
return (
<nav className="nav">
<h1>My Blog</h1>
<div>
<Link to="/">Home</Link>
<Link to="/add">Add Post</Link>
</div>
</nav>
);
}