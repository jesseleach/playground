import Navbar from "./Navbar";
import Home from "./Home";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const ENDPOINT = "https://api.dailysmarty.com/posts";
    axios(ENDPOINT)
      .then((response) => {
        setIsLoading(false);
        console.log("RES", response.data);

        setPosts(response.data.posts);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("An error happened", error);
      });
  };

  const content = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <pre>{posts.map(post => <div>{post.title}</div>)}</pre>
    </div>
  );

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      {content}
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
