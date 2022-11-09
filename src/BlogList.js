const BlogList = ({ blogs, title}) => {
    console.log(blogs);
return (
        <div className="blog-list">
            <h2>{ title }</h2>
 {blogs.map((blog) => (
<div className="blog-preview" key={blog.id}>
<h2>{blog.data.title}</h2>
<p>Written by</p>
</div>
        ))}
        </div>
    );
}

export default BlogList;