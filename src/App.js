import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BlogList from "./BlogList";
import { useState, useEffect } from "react";


function App() {
  const [blogs, setBlogs] = useState(null);

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
      <SearchBar placeholder="Enter a Blog Name..." data={blogs} />
      
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default App;
