import React from 'react';
import { useSelector } from 'react-redux';

export default function Library() {
  let posts = useSelector((state) => state.BLOG.posts);
  console.log(posts);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>



<div>
    <h1><b>NOTES</b></h1>
      {posts.length <= 0 ? (
        
        <div><p>NOTES NOT AVAILABLE</p></div>
      ) : (
        
        posts.map((item, index) => (

          <div
            key={index}
            style={{
              width: "200px",
              height: "250px",
              backgroundColor: item.color,
              margin: "10px", 
              padding: "10px", 
              boxSizing: "border-box", 
              borderRadius:"10px",
              marginTop:"50px",
              boxShadow:"2px 2px 2px 2px white",
              overflow:"auto"
            
            }}
          >
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))
      )}
    </div>
    </div>
  );
}
