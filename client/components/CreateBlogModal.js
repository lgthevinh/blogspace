"use client"

import { useState } from "react";

const CreateBlogModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const addTag = (e) => {
    e.preventDefault();
    const tag = document.getElementById("tags").value;
    if (tag === "" || tag === null) return;
    setTags([...tags, tag]);
    document.getElementById("tags").value = "";
  };
  const closeModal = (e) => {
    e.preventDefault();
    document.getElementById("create_blog_modal").close();
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("tags").value = "";
    document.getElementById("file").value = "";
    setTitle("");
    setContent("");
    setTags([]);
  };
  const deleteTag = (index) => {
    const new_tags = tags.filter((tag, i) => i !== index);
    setTags(new_tags);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || title === null || content === "" || content === null) {
      alert("Title and content cannot be empty!");
      return;
    }
    const blog = {
      title: title,
      content: content,
      tags: tags,
    };
    console.log(blog);
    closeModal(e);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const file = document.getElementById("file").files[0];
    if (file === null || file === undefined) return;
    console.log(file);
    closeModal(e);
  };
  const tags_list = tags.map((tag, index) => {
    return (
      <div key={index} className="rounded-box bg-blue-600 text-slate-50 text-sm w-fit flex flex-row items-center justify-between">
        <p className="ps-3">{tag}</p>
        <button className="btn btn-sm btn-circle btn-ghost float-end" onClick={() => deleteTag(index)}>
          ✕
        </button>
      </div>
    );
  });
  return (
    <dialog id="create_blog_modal" className="modal">
      <div className="modal-box max-w-4xl bg-white text-slate-800">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Create your own blog here!</h3>
        <form className="form-control">
          <input
            type="text"
            className="input input-primary w-full mt-3 bg-white"
            placeholder="Title"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="textarea textarea-primary w-full mt-3 bg-white"
            placeholder="Content"
            id="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}></textarea>
          <div className="grid grid-cols-10 gap-2 mt-3">
            <input type="text" className="input input-primary w-full bg-white col-span-8" placeholder="Tags" id="tags" name="tags" autoComplete="false" />
            <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 col-span-2" onClick={addTag}>
              +
            </button>
          </div>
          <div className="flex flex-wrap w-full gap-1 mt-3">{tags_list}</div>
          <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 w-full mt-3" onClick={handleSubmit}>
            Create
          </button>
          <div className="divider divider-neutral">Or</div>
          <p className="text-slate-600 text-md ">
            Create more professional blog? <br />
            Import your blog from markdown (.md) file!{" "}
          </p>
          <div className="grid grid-cols-4 gap-3">
            <input id="file" type="file" className="file-input bg-slate-50 border-blue-500 text-slate-700 file:bg-blue-600 file:hover:bg-blue-500 file:border-0 file:font-semibold file:text-slate-50 file-input-bordered w-full mt-3 col-span-3" />
            <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 w-full mt-3" onClick={handleUpload}>
              Upload file
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CreateBlogModal;
