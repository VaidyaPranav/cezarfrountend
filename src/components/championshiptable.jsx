import { calculateDepartmentPoints } from "../utils/championship";

export default function ChampionshipTable({ events }) {

  const results = calculateDepartmentPoints(events);

  if (!results.length) {
    return (
      <div className="text-center text-gray-300 py-10">
        No sports results yet
      </div>
    );
  }

  return (
    <div className="bg-dark-maroon/40 rounded-xl p-6 border border-purple-light/20">

      <h2 className="font-poppins font-bold text-2xl mb-6">
        Overall Championship
      </h2>

      <div className="space-y-3">

        {results.map((r, i) => (
          <div
            key={r.department}
            className="
              flex justify-between items-center
              bg-purple-800/40
              rounded-lg
              px-4 py-3
            "
          >
            <span className="font-semibold">
              {i + 1}. {r.department}
            </span>

            <span className="text-amber-300 font-bold">
              {r.points} pts
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
