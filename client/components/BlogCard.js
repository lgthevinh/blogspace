import React from "react";

const BlogCard = (props) => {
  const blog = props.blog_data;
  const tag_list = blog.tags.map((tag, index) => {
    return (
      <div key={index} className="rounded-box bg-blue-600 text-slate-50 text-sm w-fit flex flex-row items-center justify-between">
        <p className="px-3">{tag}</p>
      </div>
    );
  });
  return (
    <div className="w-full rounded-box border-slate-400 border p-5">
      <div className="flex flex-col lg:flex-row">
        <div className="skeleton lg:h-32 h-48 w-full mb-3 lg:mb-0 lg:w-48 rounded-lg"></div>
        <div className="lg:ms-3 w-full flex flex-col content-between min-h-fit">
          <a href={`blog/${blog.blog_id}`} className="text-xl font-bold text-slate-800 hover:underline">
            {blog.title}
          </a>
          <div className="flex flex-row items-center justify-start mt-1 mb-3 gap-3">
            {tag_list}
          </div>
          <div className="mt-auto">
            <a href="" className="text-slate-600 text-md mt-auto font-semibold hover:underline">
              {blog.author.username}
            </a>
            <span className="text-slate-500 font-normal"> | {blog.published_at}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
