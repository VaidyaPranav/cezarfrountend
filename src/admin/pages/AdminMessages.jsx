import { useEffect, useState } from "react";

export default function AdminMessages(){

  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}api/messages`)
      .then(r=>r.json())
      .then(setMessages);
  },[]);

  return(
    <div className="container-custom py-12 text-white  bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Messages
      </h1>

      <div className="space-y-4">

        {messages.map(m=>(
          <div
            key={m._id}
            className="bg-purple-900/40 border border-purple-light/20 p-5 rounded-xl"
          >

            <div className="font-semibold">{m.name}</div>
            <div className="text-gray-400 text-sm">{m.email}</div>

            {m.subject && (
              <div className="mt-1 text-amber-300">
                {m.subject}
              </div>
            )}

            <div className="mt-3 text-gray-200">
              {m.message}
            </div>

          </div>
        ))}

        {!messages.length && (
          <div className="text-gray-400">
            No messages yet
          </div>
        )}

      </div>

    </div>
  );
}
