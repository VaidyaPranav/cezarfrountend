import { useState } from "react";

export default function AdminLogin(){

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  const login = async ()=>{

    try{

      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({ username,password })
      });

      const data = await res.json();

      if(!res.ok){
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // save token
      localStorage.setItem("adminToken", data.token);

      // redirect
      navigate("/admin/dashboard")

    }catch(err){
      console.error(err);
      alert("Server error");
    }

    setLoading(false);
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white">

      <div className="bg-black/40 p-8 rounded-xl w-80 space-y-4">

        <h2 className="text-2xl font-bold text-white">
          Admin Login
        </h2>

        <input
          placeholder="Username"
          className="w-full p-2 rounded text-white"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded text-white"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button
          onClick={login}
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}
