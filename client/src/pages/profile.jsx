import React, { useContext } from 'react';
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../context/authContext";

const Profile = () => {
    console.log(useLocation());
    const [posts, setPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }
      
       // Function to get the shortened description
       const getShortDescription = (desc) => {
        const words = desc.split(" ");
        const shortened = words.slice(0, 20).join(" ");
        return shortened;
      };


    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/users/${currentUser.id}`);
            console.log("trigerred from useEffect");
            setPosts(res.data);
            console.log(posts);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, [currentUser.id]);

  return (
    <div className="home">
      <div className="sidebar"> 
      <div className='userinfo'>
      { currentUser !== null && <div className="userName">Blogger's Name: {currentUser.username}</div>}
       { currentUser !== null && <div className="email">Email: {currentUser.email}</div> }
      </div>   
      </div>
      
       <div className="posts">
        <h2>Post's written By You</h2>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getShortDescription(getText(post.desc))}</p>
              <Link className="link" to={`/post/${post.id}` }>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
  </div>
  );
}

export default Profile;