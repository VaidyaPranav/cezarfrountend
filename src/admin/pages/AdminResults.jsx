import { useEffect, useState } from "react";

export default function AdminResults(){

  const [events,setEvents]=useState([]);

  const load=()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/events`)
      .then(r=>r.json())
      .then(setEvents);
  };

  useEffect(load,[]);

  const update=async(id,newRound)=>{

    const winner =
      newRound?.final?.winner
        ? newRound.final.winner
        : null;

    const runner =
      winner
        ? [newRound?.final?.team1,newRound?.final?.team2]
            .find(t=>t && t!==winner) || null
        : null;

    /* instant UI update */
    setEvents(prev =>
      prev.map(ev =>
        ev._id===id
          ? {...ev, roundWinners:newRound, winner, runner}
          : ev
      )
    );

    /* save backend */
    await fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`,{
      method:"PUT",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({
        roundWinners:newRound,
        winner,
        runner
      })
    });
  };

  return(
    <div className="container-custom py-12 text-white">

      <h1 className="text-3xl font-bold mb-8">
        Update Match Results
      </h1>

      {events.filter(e=>e.category==="Sports").map(e=>{

        const rw=e.roundWinners||{};
        const r1=rw.r1||["",""];

        const semi=rw.semifinal||[
          {team1:"",team2:""},
          {team1:"",team2:""}
        ];

        const final=rw.final||{
          team1:"",
          team2:"",
          winner:null
        };

        return(

        <div key={e._id}
          className="bg-purple-900/40 p-6 rounded-xl mb-6">

          <h2 className="text-xl font-bold mb-4">
            {e.title}
          </h2>

          {/* ROUND 1 */}
          <div className="mb-6">

            <div className="font-semibold mb-2">
              Round 1 Winners
            </div>

            {[0,1].map(i=>(

              <select
                key={i}
                value={r1[i]||""}
                onChange={(ev)=>{

                  const val=ev.target.value;

                  const newR1=[...r1];
                  newR1[i]=val;

                  /* auto put into semifinal top slots */
                  const newSemi=[...semi];
                  newSemi[i]={
                    ...newSemi[i],
                    team1:val
                  };

                  update(e._id,{
                    ...rw,
                    r1:newR1,
                    semifinal:newSemi
                  });

                }}
                className="block text-black mb-2 p-2 rounded w-64"
              >
                <option value="">Select winner</option>
                {e.teams.map(t=>
                  <option key={t} value={t}>{t}</option>
                )}
              </select>

            ))}

          </div>


          {/* SEMIFINAL 1 */}
          <div className="mb-6">

            <div className="font-semibold mb-2">
              Semifinal Match 1
            </div>

            <div className="mb-1 text-xs text-white/60">
              Winner placed automatically on top
            </div>

            <div className="mb-2">
              Top: <b>{semi[0].team1 || "—"}</b>
            </div>

            <select
              value={semi[0].team2||""}
              onChange={(ev)=>{

                const val=ev.target.value;

                const newSemi=[...semi];
                newSemi[0]={
                  ...newSemi[0],
                  team2:val
                };

                update(e._id,{
                  ...rw,
                  semifinal:newSemi
                });

              }}
              className="block text-black mb-2 p-2 rounded w-64"
            >
              <option value="">Opponent</option>
              {e.teams.map(t=>
                <option key={t} value={t}>{t}</option>
              )}
            </select>

          </div>


          {/* SEMIFINAL 2 */}
          <div className="mb-6">

            <div className="font-semibold mb-2">
              Semifinal Match 2
            </div>

            <div className="mb-2">
              Top: <b>{semi[1].team1 || "—"}</b>
            </div>

            <select
              value={semi[1].team2||""}
              onChange={(ev)=>{

                const val=ev.target.value;

                const newSemi=[...semi];
                newSemi[1]={
                  ...newSemi[1],
                  team2:val
                };

                update(e._id,{
                  ...rw,
                  semifinal:newSemi
                });

              }}
              className="block text-black mb-2 p-2 rounded w-64"
            >
              <option value="">Opponent</option>
              {e.teams.map(t=>
                <option key={t} value={t}>{t}</option>
              )}
            </select>

          </div>


          {/* FINALISTS */}
          <div className="mb-6">

            <div className="font-semibold mb-2">
              Finalists
            </div>

            <select
              value={final.team1||""}
              onChange={(ev)=>{

                const val=ev.target.value;

                update(e._id,{
                  ...rw,
                  final:{...final,team1:val}
                });

              }}
              className="block text-black mb-2 p-2 rounded w-64"
            >
              <option value="">Final Team 1</option>
              {e.teams.map(t=>
                <option key={t} value={t}>{t}</option>
              )}
            </select>

            <select
              value={final.team2||""}
              onChange={(ev)=>{

                const val=ev.target.value;

                update(e._id,{
                  ...rw,
                  final:{...final,team2:val}
                });

              }}
              className="block text-black mb-2 p-2 rounded w-64"
            >
              <option value="">Final Team 2</option>
              {e.teams.map(t=>
                <option key={t} value={t}>{t}</option>
              )}
            </select>

          </div>


          {/* CHAMPION */}
          <div>

            <div className="font-semibold mb-2">
              Champion
            </div>

            <select
              value={final.winner||""}
              onChange={(ev)=>{

                const val =
                  ev.target.value === ""
                    ? null
                    : ev.target.value;

                update(e._id,{
                  ...rw,
                  final:{...final,winner:val}
                });

              }}
              className="block text-black mb-2 p-2 rounded w-64"
            >
              <option value="">Select Champion</option>

              {[final.team1,final.team2]
                .filter(Boolean)
                .map(t=>
                  <option key={t} value={t}>{t}</option>
                )}

            </select>

          </div>

        </div>

        );

      })}

    </div>
  );
}