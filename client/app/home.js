"use client";

import Navbar from "@/components/Navbar";
import BreadCrumbs from "@/components/BreadCrumbs";
import BlogCard from "@/components/BlogCard";
import SideTab from "@/components/SideTab";
import Footer from "@/components/Footer";
import CreateBlogModal from "@/components/CreateBlogModal";
import EditProfileModal from "@/components/EditProfileModal";

const blogs = [
  {
    id: 1,
    title: "Overview of blogspace, technology and journey.",
    tags: ["blogspace", "blog"],
    author: "lgthvinh",
    date: "Jan 01, 2022",
  },
  {
    title: "My adventure as a Robotics lover.",
    tags: ["robotics", "blog"],
    author: "lgthvinh",
    date: "Dec 04, 2022 ",
  },
  {
    title: "Learn, learn more, learn forever!",
    tags: ["learning", "blog"],
    author: "lgthvinh",
    date: "Feb 14, 2022",
  },
];

const user_data = {
  fullname: "Luong The Vinh",
  username: "lgthvinh",
  bio: "I thrive on technology especially software. My career is not just a job to me; it's a continuous learning adventure where I embrace challenges as opportunities to grow.",
  social_media: [
    {
      display_text: "Facebook",
      url: "https://www.facebook.com/vinh.luongthe.14811",
    },
    {
      display_text: "Github",
      url: "https://github.com/lgthevinh",
    },
    {
      display_text: "LinkedIn",
      url: "https://www.linkedin.com/in/vinh-luong-the-511a2b252/",
    },
    {
      display_text: "My Portfolio",
      url: "https://lgthevinh.github.io/my-portfolio/",
    },
  ],
};

const authentication = {
  auth_token: "value",
  refresh_token: "randomValue",
  is_logged_in: true,
};

export default function Home() {
  const is_logged_in = authentication.is_logged_in;
  const blog_list = blogs.map((blog, index) => {
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
            <div className="">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              {is_logged_in ? (
                <div>
                  <CreateBlogModal />
                  <EditProfileModal user={user_data} />
                </div>
              ) : (
                <div></div>
              )}
            </div>
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
