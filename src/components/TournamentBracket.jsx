import React from "react";

/* ROUND LABEL */
function RoundLabel({ index }) {
  const labels = ["Round 1", "Semifinals", "Final"];
  return (
    <div className="text-center text-sm font-semibold text-white/80 mb-3">
      {labels[index] ?? `Round ${index + 1}`}
    </div>
  );
}

/* MATCH CARD */
function MatchCard({ team1, team2 }) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-xl p-3 shadow-lg min-w-[200px]">
      <div className="flex flex-col divide-y divide-white/25 rounded-md overflow-hidden">
        <div className="py-2 px-3 text-sm">{team1 || "?"}</div>
        <div className="py-2 px-3 text-sm">{team2 || "?"}</div>
      </div>
    </div>
  );
}

/* BUILD BRACKET FROM NEW DB STRUCTURE */
function buildBracket(event){

  if(!event?.teams) return null;

  const teams = event.teams;

  const r1 = event.roundWinners?.r1 || [];

  const semifinal = event.roundWinners?.semifinal || [
    {team1:"",team2:""},
    {team1:"",team2:""}
  ];

  const final = event.roundWinners?.final || {
    team1:"",
    team2:"",
    winner:""
  };

  return {
    rounds: [

      /* ROUND 1 — auto from teams */
      [
        { team1: teams[0], team2: teams[1] },
        { team1: teams[2], team2: teams[3] }
      ],

      /* SEMIFINAL — EXACTLY WHAT ADMIN SET */
      [
        { team1: semifinal[0]?.team1, team2: semifinal[0]?.team2 },
        { team1: semifinal[1]?.team1, team2: semifinal[1]?.team2 }
      ],

      /* FINAL */
      [
        { team1: final.team1, team2: final.team2 }
      ]

    ]
  };
}

/* MAIN */
export default function TournamentBracket({ event }) {

  if(!event) return null;

  const bracket = buildBracket(event);

  const champion =
    event.roundWinners?.final?.winner ||
    event.winner ||
    null;

  if (!bracket) return null;

  return (
    <div className="w-full overflow-x-auto pb-4">

      <div className="flex items-center gap-6 p-2 sm:p-4 min-w-max">

        {bracket.rounds.map((round, roundIndex) => (
          <div key={roundIndex} className="flex flex-col gap-6">

            <RoundLabel index={roundIndex} />

            {round.map((match, matchIndex) => (
              <MatchCard
                key={matchIndex}
                team1={match.team1}
                team2={match.team2}
              />
            ))}

          </div>
        ))}

        {/* CHAMPION */}
        <div className="flex flex-col items-center justify-center ml-4">

          <div className="text-center text-sm font-semibold text-amber-300 mb-3">
            Champion
          </div>

          <div className="
            bg-gradient-to-br
            from-amber-400
            via-yellow-300
            to-amber-500
            text-gray-900
            rounded-xl
            px-6 py-4
            shadow-2xl
            font-bold
            min-w-[180px]
            text-center
            border border-amber-200/60
          ">
            {champion || "Winner TBD"}
          </div>

        </div>

      </div>

    </div>
  );
}
