"use client"

import Showdown from "showdown";

import { useEffect, useState } from "react";

import { fetch_blog_by_id } from "@/services/blogService";

const BlogTab = (props) => {
  const [blog_data, setBlogData] = useState({});
  const blog_id = props.blog_id;
  useEffect(() => {
    const handleFetchBlogs = async () => {
      const data = await fetch_blog_by_id(blog_id);
      setBlogData(data.data);
    }
    handleFetchBlogs();
  }, []);
  const converter = new Showdown.Converter();
  const html = converter.makeHtml(blog_data.content);
  const tag_list = blog_data.tags?.map(tag => {
    return (
      <div className="rounded-box bg-blue-600 text-slate-50 text-sm w-fit flex flex-row items-center justify-between">
        <p className="px-3">{tag}</p>
      </div>
    );
  });
  return (
    <div className="w-full rounded-box border-slate-400 border p-5 blog-tab text-slate-800">
      <h1 className="font-semibold title" style={{fontSize: 40}}>{blog_data.title}</h1>
      <p className="text-slate-600 ms-1 text-md font-semibold">
        {blog_data.author?.username} | {blog_data.published_at}
      </p>
      <div className="flex flex-row items-center justify-start mt-1 mb-5 gap-3">
        {tag_list}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export default BlogTab;