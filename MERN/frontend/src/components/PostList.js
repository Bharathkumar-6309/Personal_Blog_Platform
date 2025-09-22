import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api';
import { Link } from 'react-router-dom';


export default function PostList() {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
load();
}, []);


async function load() {
setLoading(true);
const data = await fetchPosts();
setPosts(data);
setLoading(false);
}


async function handleDelete(id) {
if (!window.confirm('Delete this post?')) return;
await deletePost(id);
load();
}


if (loading) return <p>Loading...</p>;


return (
<div>
{posts.length === 0 && <p>No posts yet. Add one!</p>}
{posts.map(p => (
<div className="card" key={p._id}>
<h3>{p.title}</h3>
<p className="meta">By {p.author} — {new Date(p.createdAt).toLocaleString()}</p>
<p>{p.content.slice(0, 200)}{p.content.length>200?"...":''}</p>
<div className="actions">
<Link to={`/edit/${p._id}`} className="btn">Edit</Link>
<button className="btn danger" onClick={() => handleDelete(p._id)}>Delete</button>
</div>
</div>
))}
</div>
);
}