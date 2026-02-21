import { useEffect, useState } from "react";

export default function AdminEvents(){

  const [events,setEvents]=useState([]);
  const [editing,setEditing]=useState(null);
  const [form,setForm]=useState({});

  /* LOAD EVENTS */
  const load=()=>{
    fetch(`${import.meta.env.VITE_API_URL}api/events`)
      .then(r=>r.json())
      .then(setEvents);
  };

  useEffect(load,[]);

  /* DELETE */
  const remove=async(id)=>{
    if(!confirm("Delete event?")) return;

    await fetch(`${import.meta.env.VITE_API_URL}api/events/${id}`,{
      method:"DELETE"
    });

    load();
  };

  /* EDIT START */
  const edit=(e)=>{
    setEditing(e._id);
    setForm({
      ...e,
      teams:(e.teams||[]).join(",")
    });
  };

  /* INPUT CHANGE */
  const change=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  /* SAVE */
  const save=async()=>{

    const payload={
      ...form,
      teams:form.teams?.split(",").map(t=>t.trim())
    };

    await fetch(`${import.meta.env.VITE_API_URL}api/events/${editing}`,{
      method:"PUT",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify(payload)
    });

    setEditing(null);
    load();
  };

  /* ADD NEW EVENT */
  const add=async()=>{
    const newEvent={
      title:"New Event",
      category:"Sports",
      description:"",
      venue:"",
      timing:"",
      date:"",
      teams:["CSE","ECE"],
      winnerPoints:5,
      runnerPoints:3
    };

    await fetch(`${import.meta.env.VITE_API_URL}api/events`,{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify(newEvent)
    });

    load();
  };

  return(
    <div className="container-custom py-12 text-white">

      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Manage Events</h1>

        <button
          onClick={add}
          className="bg-amber-400 text-black px-5 py-2 rounded font-semibold"
        >
          + Add Event
        </button>
      </div>

      <div className="space-y-6">

        {events.map(e=>(

          <div key={e._id}
            className="bg-purple-900/40 border border-purple-light/20 rounded-xl p-6">

            {editing===e._id ? (

              /* EDIT MODE */
              <div className="space-y-3">

                <input name="title" value={form.title||""} onChange={change}
                  className="w-full p-2 rounded text-fuchsia-100"/>

                <input name="venue" value={form.venue||""} onChange={change}
                  placeholder="Venue"
                  className="w-full p-2 rounded text-fuchsia-100"/>

                <input name="date" value={form.date||""} onChange={change}
                  placeholder="Date"
                  className="w-full p-2 rounded text-fuchsia-100"/>

                <input name="timing" value={form.timing||""} onChange={change}
                  placeholder="Timing"
                  className="w-full p-2 rounded text-fuchsia-100"/>

                <textarea name="description" value={form.description||""}
                  onChange={change}
                  className="w-full p-2 rounded text-fuchsia-100"/>

                {/* TEAMS */}
                {e.category==="Sports" && (
                  <>
                    <input
                      name="teams"
                      value={form.teams||""}
                      onChange={change}
                      placeholder="Teams comma separated"
                      className="w-full p-2 rounded text-fuchsia-100 "
                    />

                    <input
                      name="winnerPoints"
                      value={form.winnerPoints||5}
                      onChange={change}
                      placeholder="Winner Points"
                      className="w-full p-2 rounded text-fuchsia-100"
                    />

                    <input
                      name="runnerPoints"
                      value={form.runnerPoints||3}
                      onChange={change}
                      placeholder="Runner Points"
                      className="w-full p-2 rounded text-fuchsia-100"
                    />
                  </>
                )}

                <div className="flex gap-4">
                  <button onClick={save}
                    className="bg-green-500 px-4 py-2 rounded">
                    Save
                  </button>

                  <button onClick={()=>setEditing(null)}
                    className="bg-gray-500 px-4 py-2 rounded">
                    Cancel
                  </button>
                </div>

              </div>

            ) : (

              /* VIEW MODE */
              <div>

                <div className="text-xl font-bold">{e.title}</div>
                <div className="text-gray-300">{e.venue}</div>

                {e.category==="Sports" && (
                  <div className="text-sm mt-2 text-gray-400">
                    Teams: {(e.teams||[]).join(", ")}
                  </div>
                )}

                <div className="mt-4 flex gap-3">

                  <button
                    onClick={()=>edit(e)}
                    className="bg-blue-500 px-4 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={()=>remove(e._id)}
                    className="bg-red-500 px-4 py-1 rounded"
                  >
                    Delete
                  </button>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}
