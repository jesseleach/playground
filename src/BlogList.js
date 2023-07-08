const BlogList = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        const hasImage = !!blog.data.preview;
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>
              <a href={blog.data.url} target="_blank">
                {blog.data.title}
              </a>
            </h2>
            <p>Written by {blog.data.author}</p>
            <p className="selfText">{blog.data.selftext}</p>
            <p>
            
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;

//          <p>Written by {blog.data.preview  && blog.data.preview.images[0].source.url}</p>
