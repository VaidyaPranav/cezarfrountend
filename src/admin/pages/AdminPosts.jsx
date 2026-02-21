import { useState } from "react";

export default function AdminPosts(){

  const [form,setForm]=useState({
    adminName:"",
    text:"",
    file:null
  });

  const handleChange=e=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleFile=e=>{
    setForm({...form,file:e.target.files[0]});
  };
const handleSubmit = async e => {
  e.preventDefault();

  const data = new FormData();
  data.append("adminName", form.adminName);
  data.append("text", form.text);
  if(form.file) data.append("media", form.file);

  await fetch("http://localhost:5000/api/posts",{
    method:"POST",
    body:data
  });

  alert("Post created");
  setForm({adminName:"",text:"",file:null});
};

  return(
    <div className="container-custom py-12 bg-gradient-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Create Update Post</h1>
        <p className="text-gray-400 mb-8">Share updates with media content</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-semibold mb-2">Admin Name</label>
            <input
              name="adminName"
              value={form.adminName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-purple-400/30 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Post Content</label>
            <textarea
              name="text"
              value={form.text}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-purple-400/30 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3">Media</label>
            <div className="relative border-2 border-dashed border-purple-400/50 rounded-lg p-8 cursor-pointer bg-gray-700/20">
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFile}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="text-center">
                <p>{form.file ? form.file.name : "Click to upload"}</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold py-3 rounded-lg"
          >
            Publish Post
          </button>

        </form>
      </div>
    </div>
  );
}
