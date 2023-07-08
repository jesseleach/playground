import React from "react";
import "./App.css";
import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const filteredBlogs = blogs.filter((blog) => {
    if (!searchTerm) {
      return true;
    }
    return blog.data.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    fetch("https://www.reddit.com/r/Bushwick.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBlogs(res.data.children);
      });
  }, []);

  return (
    <div className="App">
      
      <div className="search">
      
        <div className="searchInputs">
        <Navbar/>
          <input  
            type="text"
            placeholder={"Enter a Search Term..."}
            onChange={handleChange}
           
          />
        
        </div>
      </div>

      <BlogList blogs={filteredBlogs} title="All Blogz" />
    </div>
  );
}

export default App;
