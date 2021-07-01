import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header 
     name={blogData.name}/>
     <About 
     about={blogData.about}
     image={blogData.image}/>
     
    </div>
  );
}

export default App;

/* 
App
-Header
  --About 
  ---article list 
  */