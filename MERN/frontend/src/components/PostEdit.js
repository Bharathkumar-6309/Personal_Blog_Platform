import React, { useEffect, useState } from 'react';
import { getPost, updatePost } from '../api';
import { useNavigate, useParams } from 'react-router-dom';


export default function PostEdit() {
const { id } = useParams();
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate();


useEffect(() => {
(async () => {
const p = await getPost(id);
setTitle(p.title);
setAuthor(p.author);
setContent(p.content);
})();
}, [id]);


async function handleSubmit(e) {
e.preventDefault();
await updatePost(id, { title, author, content });
navigate('/');
}


return (
<form onSubmit={handleSubmit} className="form">
<label>Title</label>
<input value={title} onChange={e=>setTitle(e.target.value)} required />


<label>Author</label>
<input value={author} onChange={e=>setAuthor(e.target.value)} />


<label>Content</label>
<textarea value={content} onChange={e=>setContent(e.target.value)} required rows={8} />


<button type="submit" className="btn">Save</button>
</form>
);
}