const BlogList = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>
            <a href={blog.data.url} target="_blank">
              {blog.data.title}
            </a>
          </h2>
          <p>Written by {blog.data.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
