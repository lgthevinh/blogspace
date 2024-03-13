'use client';

import Navbar from "@/components/Navbar";
import BreadCrumbs from "@/components/BreadCrumbs";
import BlogCard from "@/components/BlogCard";
import SideTab from "@/components/SideTab";
import Footer from "@/components/Footer";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthProvider";

import { fetch_blogs } from "@/services/blogService";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const is_logged_in = useContext(AuthContext).is_logged_in;
  const user_data = useContext(AuthContext).user;

 
  useEffect(() => {
    const handleFetchBlogs = async () => {
      const data = await fetch_blogs();
      setBlogs(data.data);
    };
    handleFetchBlogs();
  }, []);
  const blog_list = blogs?.map((blog, index) => {
    return (
      <div key={index} className="pt-2 pb-5">
        <BlogCard blog_data={blog} />
      </div>
    );
  });
  return (
    <main className="bg-white">
      <Navbar is_logged_in={is_logged_in} />
      <div className="lg:w-[70%] lg:px-0 px-3 mx-auto min-h- 9 pb-5">
        <div className="grid grid-cols-4 relative mt-0">
          <div className="relative lg:col-span-1 col-span-4">
            <SideTab is_logged_in={is_logged_in} user={user_data} />
          </div>
          <div className="lg:col-span-3 col-span-4 lg:px-5">
            <BreadCrumbs />
            {blog_list}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
