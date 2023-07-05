import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";


const Home = () => {
  const [posts, setPosts] = useState([]);

 const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        console.log("trigerred from useEffect");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);



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

  return (
    <div className="home">
      <div className="sidebar"><Sidebar/></div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <p>{post.username}</p>
                <h1>{post.title}</h1>
              </Link>
              <p>{getShortDescription(getText(post.desc))}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;