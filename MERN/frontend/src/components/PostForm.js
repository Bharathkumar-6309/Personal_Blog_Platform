import React, { useState } from 'react';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';


export default function PostForm() {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [author, setAuthor] = useState('');
const navigate = useNavigate();


async function handleSubmit(e) {
e.preventDefault();
await createPost({ title, content, author });
navigate('/');
}


return (
<form onSubmit={handleSubmit} className="form">
<label>Title</label>
<input value={title} onChange={e=>setTitle(e.target.value)} required />


<label>Author</label>
<input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Optional" />


<label>Content</label>
<textarea value={content} onChange={e=>setContent(e.target.value)} required rows={8} />


<button type="submit" className="btn">Add Post</button>
</form>
);
}