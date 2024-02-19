import Showdown from "showdown";

const blog_data = {
  id: 1,
  title: "Overview of blogspace, technology and journey.",
  cover_image: "https://source.unsplash.com/random",
  content: "# Engineering Notebook\n## Project Overview\n- Project Name: blogspace\n- Project Description: A platform for sharing verified blog posts of users.\n- Project Start Date: February 15, 2024\n- Project End Date: ongoing\n## Table of Contents\n- [1. Introduction](#1-introduction)\n- [2. Requirements](#2-requirements)\n- [3. Design](#3-design)\n## 1. Introduction\nBlogspace is a platform for sharing blog posts. It allows users to create and publish blog posts, allowing users to share information about themselves and their interests.\n## 2. Requirements\nThe requirements for the project are as follows:\n- Authentication\n- User profiles\n- Blog post creation and publishing",
  tags: ["#first", "#blog"],
  published_at: "2021-10-10T00:00:00Z",
  tags: ["#blogspace", "#blog"],
};

const BlogTab = () => {
  const converter = new Showdown.Converter();
  const html = converter.makeHtml(blog_data.content);
  console.log(html);
  return (
    <div className="w-full rounded-box border-slate-400 border p-5 blog-tab text-slate-800">
      <h1 className="text-3xl font-semibold">{blog_data.title}</h1>
      <div className="flex flex-row items-center justify-start mt-1 mb-3 gap-3">
        {blog_data.tags.map((tag, index) => {
          return (
            <div key={index} className="rounded-box bg-blue-600 text-slate-50 text-sm w-fit flex flex-row items-center justify-between">
              <p className="px-3">{tag}</p>
            </div>
          );
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export default BlogTab;