import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
const [blogs, setBlogs] = useState(null);

useEffect(() => {
    fetch('https://www.reddit.com/r/Bushwick.json')
    .then(res => {
        return res.json();
    })
    .then(res => {
setBlogs(res.data.children)
    });
}, []);


    return (
        <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/> }
        </div>
    );
}

export default Home;