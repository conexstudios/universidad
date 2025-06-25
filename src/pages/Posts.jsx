import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Posts.css'
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/publicaciones');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

  return (
    <div className="posts-container">
      <h1>Publicaciones</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.T420_PUBLICACION_ID} className="post-item">
            <h2>{post.T420_NOMBRE}</h2>
            <p>{post.descripcion}</p>
            <Link to={`/posts/${post.id}`}>Leer más</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;