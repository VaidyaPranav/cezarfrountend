import { useState } from "react";
import { calculateDepartmentPoints } from "../utils/championship";

export default function ChampionshipDashboard({ events }) {

  const standings = calculateDepartmentPoints(events);
  const [openDept, setOpenDept] = useState(null);

  const medals = ["🥇","🥈","🥉"];
console.log(events.filter(e => e.category === "Sports"));


  if (!standings.length) {
    return (
      <div className="text-center py-20 text-gray-300">
        No sports results announced yet
      </div>
    );
  }

  return (
    <div className="container-custom py-12">

      <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-10 text-center">
        Overall Championship
      </h1>

      {/* Champion card */}
      <div className="mb-10 flex justify-center">
        <div className="bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-gray-900 rounded-2xl px-10 py-8 shadow-2xl text-center border border-amber-200/60 w-full max-w-md">
          <div className="text-5xl mb-2">🏆</div>
          <div className="text-xl font-bold">Current Champion</div>
          <div className="text-3xl font-extrabold mt-2">
            {standings[0].department}
          </div>
          <div className="font-semibold mt-1">
            {standings[0].points} pts
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-dark-maroon/40 rounded-xl border border-purple-light/20 overflow-hidden shadow-lg">

        {standings.map((team, i) => {

          const isOpen = openDept === team.department;

          return (
            <div key={team.department}>

              {/* ROW */}
              <button
                onClick={() => setOpenDept(isOpen ? null : team.department)}
                className={`
                  w-full text-left
                  flex items-center justify-between
                  px-6 py-4
                  ${i!==standings.length-1 ? "border-b border-purple-light/20" : ""}
                  ${i===0 ? "bg-purple-800/40" : ""}
                  hover:bg-purple-700/30 transition
                `}
              >

                <div className="flex items-center gap-4">
                  <div className="text-2xl w-8 text-center">
                    {medals[i] || i+1}
                  </div>

                  <div className="font-semibold text-white text-lg">
                    {team.department}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-amber-300 font-bold text-lg">
                    {team.points} pts
                  </span>

                  <span className="text-gray-300">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </div>

              </button>

              {/* DETAILS PANEL */}
              {isOpen && (
                <div className="bg-purple-900/40 px-8 py-4 space-y-2">

                  {(team.details || []).map((d, idx) => (

                    <div
                      key={idx}
                      className="flex justify-between text-gray-200"
                    >
                      <span>
                        {d.event} — {d.type}
                      </span>

                      <span className="text-amber-300 font-semibold">
                        +{d.points}
                      </span>
                    </div>
                  ))}

                </div>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}
