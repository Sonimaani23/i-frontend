import React from "react";
import { useEffect, useState } from "react";

import Card from "../Card/Card";
import Header from "../header/header";

// import reportWebVitals from './reportWebVitals';

export default function Postview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://new-3fn6.onrender.com/" , {method:"GET"})
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, [posts]);

  return (
    <div className="post-container">

        <Header/>


      {posts.map((post, i) => {
        return <Card key={i} post={post} />;
      })}
    </div>
  );
}
