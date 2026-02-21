import { useEffect, useState } from "react";

export default function AdminRegistrations() {

  const [registrations,setRegistrations] = useState([]);
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState("");

  const API = "http://localhost:5000/api/registrations";

  const loadData = async()=>{
    try{
      const res = await fetch(API);
      const data = await res.json();
      setRegistrations(data);
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    loadData();
  },[]);

  const deleteReg = async(id)=>{
    if(!confirm("Delete this registration?")) return;
    try{
      await fetch(`${API}/${id}`,{ method:"DELETE" });
      setRegistrations(prev=>prev.filter(r=>r._id!==id));
    }catch(err){
      alert("Delete failed");
    }
  };

  const filtered = registrations.filter(r=>
    r.name?.toLowerCase().includes(search.toLowerCase()) ||
    r.event?.toLowerCase().includes(search.toLowerCase()) ||
    r.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-10 bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      <h1 className="text-3xl font-bold mb-6">Registrations</h1>

      <input
        placeholder="Search name / event / email..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
        className="w-full sm:w-96 mb-6 px-4 py-2 rounded-lg bg-purple-900/40 border border-purple-light/20 focus:outline-none focus:border-amber-300"
      />

      {loading && <div className="text-gray-300">Loading registrations...</div>}

      {!loading && filtered.length===0 && (
        <div className="text-gray-300 py-20 text-center">No registrations yet</div>
      )}

      {/* MOBILE CARDS */}
      <div className="sm:hidden space-y-4">
        {!loading && filtered.map(reg=>(
          <div key={reg._id} className="bg-purple-900/30 border border-purple-light/20 rounded-lg p-4 space-y-2">
            <div><span className="text-amber-300 font-semibold">Name:</span> {reg.name}</div>
            <div><span className="text-amber-300 font-semibold">Phone:</span> {reg.phone}</div>
            <div><span className="text-amber-300 font-semibold">Email:</span> {reg.email}</div>
            <div><span className="text-amber-300 font-semibold">Event:</span> {reg.event}</div>
            <div><span className="text-amber-300 font-semibold">Category:</span> {reg.eventCategory}</div>
            <div><span className="text-amber-300 font-semibold">Team:</span> {reg.teamName || "-"}</div>
            <div><span className="text-amber-300 font-semibold">Members:</span> {reg.teamMembers || "-"}</div>
            <div><span className="text-amber-300 font-semibold">Date:</span> {new Date(reg.createdAt).toLocaleDateString()}</div>
            <button
              onClick={()=>deleteReg(reg._id)}
              className="w-full bg-red-500/80 hover:bg-red-600 px-3 py-2 rounded-md text-sm font-semibold mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      {!loading && filtered.length>0 && (
        <div className="hidden sm:block overflow-x-auto rounded-xl border border-purple-light/20">
          <table className="w-full text-left">
            <thead className="bg-purple-900/50">
              <tr className="text-amber-300">
                <th className="p-4">Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Email</th>
                <th className="p-4">Event</th>
                <th className="p-4">Category</th>
                <th className="p-4">Team</th>
                <th className="p-4">Members</th>
                <th className="p-4">Date</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(reg=>(
                <tr key={reg._id} className="border-t border-purple-light/20 hover:bg-purple-800/30">
                  <td className="p-4">{reg.name}</td>
                  <td className="p-4">{reg.phone}</td>
                  <td className="p-4">{reg.email}</td>
                  <td className="p-4">{reg.event}</td>
                  <td className="p-4">{reg.eventCategory}</td>
                  <td className="p-4">{reg.teamName || "-"}</td>
                  <td className="p-4 whitespace-pre-line">{reg.teamMembers || "-"}</td>
                  <td className="p-4 text-sm text-gray-300">{new Date(reg.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">
                    <button
                      onClick={()=>deleteReg(reg._id)}
                      className="bg-red-500/80 hover:bg-red-600 px-3 py-1 rounded-md text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
