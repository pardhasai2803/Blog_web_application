import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  console.log(useLocation());
  const curPostId = useLocation().pathname.split("/")[2];
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const res = await axios.get(`/posts?cat=${cat}`);
         setPosts(res.data);
       } catch (err) {
         console.log(err);
       }
     };
     fetchData();
   }, [cat]);

  return (
    <div className='menu'>
      <h3>Other posts you may like</h3>
      {posts.filter(p => p.id != curPostId).map((post)=>(
        <div className='post' key={post.id}>
            <img src={`../upload/${post?.img}`} alt=""/>
            <Link className="link" to={`/post/${post.id}`}>
                <h4>{post.title}</h4>
            </Link>
            <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
            </Link>
        </div>   
      ))}
    </div>
  );
}

export default Menu;
