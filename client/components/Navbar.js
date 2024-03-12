'use client'

import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthProvider';

import React from "react";

const Navbar = () => {
  const is_logged_in = useContext(AuthContext).is_logged_in;
  return (
    <div className="navbar bg-white sticky top-0 z-50 ">
      <div className="lg:w-[70%] w-full mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-blue-600 px-0 hover:bg-inherit">blogspace</a>
        </div>
        <div className="flex-none">
          {is_logged_in ? (
            <button
              className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 mx-3 h-full"
              onClick={() => document.getElementById("create_blog_modal").showModal()}>
              Create blog
            </button>
          ) : (
            <div></div>
          )}

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 text-slate-50">
              Menu
            </div>
            {is_logged_in ? (
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button onClick={() => document.getElementById("edit_profile_modal").showModal()}>Edit Profile</button>
                </li>
                <li>
                  <a>Setting</a>
                </li>
                <div className="divider before:bg-slate-600 after:bg-slate-600 my-0 py-0 h-1"></div>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            ) : (
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Sign up</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
