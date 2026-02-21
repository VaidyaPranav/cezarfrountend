import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function Updates(){

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch(`${API}/api/posts`)
      .then(r=>r.json())
      .then(setPosts);
  },[]);

  return(
    <div className="bg-gradient-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      <h1 className="text-3xl pt-5 pl-5 font-bold mb-8">
        Latest Updates
      </h1>

      <div className="space-y-6">

        {posts.map(p=>(

          <div key={p._id}
            className="bg-purple-900/40 border border-purple-light/20 p-6 rounded-xl">

            <div className="font-bold text-sm mb-1">
              admin: {p.adminName}
            </div>

            <div className="mb-3">{p.text}</div>

            {p.mediaUrl && p.mediaType === "image" && (
              <img
                src={p.mediaUrl.startsWith("http") ? p.mediaUrl : `${API}/${p.mediaUrl}`}
                className="rounded-lg max-h-80"
              />
            )}

            {p.mediaUrl && p.mediaType === "video" && (
              <video
                controls
                src={p.mediaUrl.startsWith("http") ? p.mediaUrl : `${API}/${p.mediaUrl}`}
                className="rounded-lg max-h-80"
              />
            )}

          </div>

        ))}

      </div>

    </div>
  );
}
