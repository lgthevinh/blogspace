import Showdown from "showdown";

const blog_data = {
  id: 1,
  title: "Overview of blogspace, technology and journey.",
  cover_image: "https://source.unsplash.com/random",
  content: "# Engineering Notebook \n\n## Project Overview\n\n- Project Name: blogspace\n- Project Description: A platform for sharing verified blog posts of users.\n- Project Start Date: February 15, 2024\n- Project End Date: ongoing\n\n## Table of Contents\n\n- [1. Introduction](#1-introduction)\n- [2. Requirements](#2-requirements)\n- [3. Design](#3-design)\n\n## 1. Introduction\n\nBlogspace is a platform for sharing blog posts. It allows users to create and publish blog posts, allowing users to share information about themselves and their interests.\n\n## 2. Requirements\n\nThe requirements for the project are as follows:\n\n- Authentication\n- User profiles\n- Blog post creation and publishing\n\n## 3. Design\n\nThe project uses the following technologies:\n- For client-side development: Next.js, React, and Tailwind CSS\n- For server-side development: FastAPI, and MongoDB\n\nCode format of the project:\n- Function in Javascript are defined with camelCase, and variables are defined with snake_case. For example:\n```javascript\nconst myFunction = () => {\n  let my_variable = 0;\n  return my_variable;\n};\n```\n- As for the React components, they are defined with PascalCase. For example:\n```javascript\nconst MyComponent = () => {\n  return <div>Hello, world!</div>;\n};\n```\n\nData model of the project:\n- The project uses a MongoDB database to store user profiles and blog posts. The user profile model is as follows:\n\n- For authentication collection:\n```json\n{\n  \"email\": \"string\",\n  \"password\": \"string\",\n}\n```\n\n- For user profile collection:\n```json\n{\n  \"fullname\": \"string\",\n  \"username\": \"string\",\n  \"email\": \"string\",\n  \"bio\": \"string\",\n  \"social_media\": [\n    {\n      \"display_text\": \"string\",\n      \"url\": \"string\"\n    }\n  ]\n}\n```\n\n- For blog post collection:\n```json\n{\n  \"id\": \"string\",\n  \"title\": \"string\",\n  \"cover_image\": \"image_url\",\n  \"content\": \"string\",\n  \"author\": \"string\",\n  \"published_at\": \"string\",\n  \"tags\": [\"string\"],\n  \"verified\": \"boolean\",\n}\n```\n- Or blogs can be stored in markdown format.",
  tags: ["blogspace", "blog"],
  published_at: "2021-10-10T00:00:00Z",
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