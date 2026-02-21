export function make8SlotBracket(teams = []) {

  if (teams.length !== 6) {
    // fallback to simple pairing if not 6
    return {
      rounds: [
        [
          { team1: teams[0] || "-", team2: teams[1] || "-" },
          { team1: teams[2] || "-", team2: teams[3] || "-" }
        ],
        [
          { team1: "Winner 1", team2: "Winner 2" }
        ]
      ]
    };
  }

  // FIRST ROUND (4 teams play)
  const round1 = [
    { team1: teams[0], team2: teams[1] }, // match 1
    { team1: teams[2], team2: teams[3] }  // match 2
  ];

  // SEMIFINALS
  const round2 = [
    { team1: "Winner 1", team2: teams[4] }, // team5 enters here
    { team1: "Winner 2", team2: teams[5] }  // team6 enters here
  ];

  // FINAL
  const round3 = [
    { team1: "Winner SF1", team2: "Winner SF2" }
  ];

  return {
    rounds: [round1, round2, round3]
  };
}
