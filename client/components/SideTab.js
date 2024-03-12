'use client'

import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";

import login_user from "@/services/loginService";

const SideTab = () => {
  const is_logged_in = useContext(AuthContext).is_logged_in;
  const user_data = useContext(AuthContext).user;

  const SetIsLoggedIn = useContext(AuthContext).setIsLoggedIn;
  const SetUser = useContext(AuthContext).setUser;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login_user(email, password);
    if (data.status === 200) {
      SetIsLoggedIn(true);
      SetUser(data.data);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("user", JSON.stringify(data.data));
      }
    }
    console.log(is_logged_in, user_data);
  };
  return (
    <div className="h-fit sticky top-[4.5rem] lg:block hidden">
      {is_logged_in ? (
        <div className="rounded-box border-slate-400 border shadow p-5">
          <h1 className="text-slate-600 text-2xl font-bold">Luong The Vinh</h1>
          <p className="text-slate-600 text-lg font-semibold mb-2">@lgthvinh</p>
          <p className="text-slate-500 text-sm font-semibold">
            I thrive on technology especially software. My career is not just a job to me; it's a continuous learning adventure where I embrace challenges as
            opportunities to grow.
          </p>
          <div className="divider before:bg-slate-400 after:no-underline my-1"></div>
          <p className="text-slate-600 text-md font-semibold">Featured blogs:</p>
          <ul>
            <li>
              <a href="" className="text-slate-500 text-sm underline">
                Overview of blogspace, technology and journey.
              </a>
            </li>
            <li>
              <a href="" className="text-slate-500 text-sm underline">
                My adventure as a Robotics lover.
              </a>
            </li>
            <li>
              <a href="" className="text-slate-500 text-sm underline">
                Learn, learn more, learn forever!
              </a>
            </li>
          </ul>
          {(user_data.social_media.length > 0) ? (
            <div>
              <div className="divider before:bg-slate-400 after:no-underline my-1"></div>
              <p className="text-slate-600 text-md font-semibold">Social media:</p>
              <ul>
                {
                  user_data?.social_media.map((object, index) => {
                    return (
                      <li key={index} className="">
                        <a href={object.url} className="text-slate-500 text-sm underline">
                          {object.display_text}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="rounded-box border-slate-400 border shadow p-5">
          <h1 className="text-slate-600 text-xl font-semibold">Welcome back!</h1>
          <p className="text-slate-500 text-md ">
            Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.
          </p>
          <form className="form-control">
            <input type="text" className="input input-primary w-full mt-3 bg-white text-slate-700" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input input-primary w-full mt-3 bg-white text-slate-700" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 w-full mt-3" onClick={handleLogin}>Sign in</button>
          </form>
          <div className="divider before:bg-slate-400 after:bg-slate-400 text-slate-400 my-3 text-sm">Or</div>
          <p className="text-slate-500 text-sm font-semibold">
            New to blogspace?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default SideTab;
