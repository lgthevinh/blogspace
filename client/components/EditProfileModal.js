import React, { useState } from "react";

const EditProfileModal = (props) => {
  const user_data = props.user;
  const [fullname, setFullname] = useState(user_data.fullname);
  const [username, setUsername] = useState(user_data.username);
  const [bio, setBio] = useState(user_data.bio);
  const [social_media, setSocialMedia] = useState(user_data.social_media);
  const deleteSocialMedia = (e, index) => {
    e.preventDefault();
    const new_social_media = social_media.filter((media, i) => i !== index);
    setSocialMedia(new_social_media);
  };
  const addSocialMedia = (e) => {
    e.preventDefault();
    const display_text = document.getElementById("display_text").value;
    const url = document.getElementById("url").value;
    if (display_text === "" || display_text === null || url === "" || url === null) return;
    setSocialMedia([...social_media, { display_text: display_text, url: url }]);
  };
  const closeModal = (e) => {
    e.preventDefault();
    document.getElementById("display_text").value = "";
    document.getElementById("url").value = "";
    document.getElementById("edit_profile_modal").close();
    setFullname(user_data.fullname);
    setUsername(user_data.username);
    setBio(user_data.bio);
  };
  const social_media_list = social_media.map((object, index) => {
    return (
      <div key={index} className="rounded-box bg-blue-600 text-slate-50 text-sm w-fit flex flex-row items-center justify-between">
        <a href={object.url} className="ps-3 link">
          {object.display_text}
        </a>
        <button className="btn btn-sm btn-circle btn-ghost float-end" onClick={(e) => deleteSocialMedia(e, index)}>
          ✕
        </button>
      </div>
    );
  });
  return (
    <dialog id="edit_profile_modal" className="modal">
      <div className="modal-box max-w-4xl bg-white text-slate-800">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Edit your profile here!</h3>
        <form className="form-control">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base text-blue-600 font-semibold">Fullname</span>
              <span className="label-text-alt"></span>
            </div>
            <input type="text" placeholder="Type here" className="input input-primary w-full bg-white" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base text-blue-600 font-semibold">@username</span>
              <span className="label-text-alt"></span>
            </div>
            <input type="text" placeholder="Type here" className="input input-primary w-full bg-white" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base text-blue-600 font-semibold">Bio</span>
              <span className="label-text-alt"></span>
            </div>
            <textarea className="textarea textarea-primary w-full bg-white" value={bio} onChange={(e) => setBio(e.target.value)} />
          </label>
          <div className="grid grid-cols-10 gap-2 mt-3">
            <input type="text" className="input input-primary w-full bg-white col-span-10" placeholder="Display text (eg: Facebook)" id="display_text" autoComplete="false" />
            <input type="text" className="input input-primary w-full bg-white col-span-8" placeholder="URL" id="url" autoComplete="false" />
            <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 col-span-2" onClick={addSocialMedia}>
              +
            </button>
          </div>
          <div className="flex flex-wrap w-full gap-1 mt-3">{social_media_list}</div>
          <button className="btn btn-primary bg-blue-600 text-slate-50 hover:bg-blue-500 w-full mt-3">Save</button>
        </form>
      </div>
    </dialog>
  );
};

export default EditProfileModal;
