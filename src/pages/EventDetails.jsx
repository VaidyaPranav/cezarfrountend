import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TournamentBracket from "../components/TournamentBracket";


export default function EventDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH EVENTS FROM BACKEND
  useEffect(() => {

    async function load() {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();

        setEvents(data);

        const found = data.find(e => e._id === id);
        setEvent(found || null);

      } catch (err) {
        console.error("Failed to load event:", err);
      } finally {
        setLoading(false);
      }
    }

    load();

  }, [id]);

  // LOADING UI
  if (loading) {
    return (
      <div className="text-white p-20 text-center">
        Loading event...
      </div>
    );
  }

  // EVENT NOT FOUND
  if (!event) {
    return (
      <div className="text-white p-20 text-center">
        Event not found
      </div>
    );
  }

  return (
    <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-dark-purple via-dark-maroon to-dark-purple py-8 px-4 border-b border-purple-light/20">
        <div className="container-custom flex items-center gap-4">

          <button
            onClick={() => navigate(-1)}
            className="text-2xl hover:opacity-80 transition"
          >
            ←
          </button>

          <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl">
            {event.title}
          </h1>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* MAIN */}
            <div className="lg:col-span-2">

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden mb-10 h-64 sm:h-80 lg:h-96 shadow-xl">
                <img
                  src={event.image || "/fallback.jpg"}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mb-10">
                <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-4">
                  About This Event
                </h2>

                <p className="font-inter text-gray-300 leading-relaxed text-base sm:text-lg">
                  {event.description}
                </p>

                {event.points && (
                  <p className="font-inter text-gray-300 text-base sm:text-lg mt-4">
                    Points: {event.points}
                  </p>
                )}
              </div>

              {/* SPORTS BRACKET */}
              {event.category === "Sports" && event.teams?.length > 0 && (
                <div className="mb-12">

                  <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-6">
                    Tournament Bracket
                  </h2>

                  <div className="
                    relative rounded-2xl
                    bg-gradient-to-br from-purple-900/70 via-dark-maroon/60 to-purple-900/70
                    border border-purple-light/30 shadow-2xl backdrop-blur-md
                    p-4 sm:p-6 lg:p-8
                  ">
                    <div className="absolute inset-0 rounded-2xl bg-purple-600/10 blur-xl pointer-events-none"/>
                    <div className="relative z-10">
                      <TournamentBracket event={event} />

                    </div>
                  </div>

                </div>
              )}

              {/* RULES FOR NON-SPORTS */}
              {event.category !== "Sports" && (
                <div className="mb-12">

                  <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-6">
                    Rules & Guidelines
                  </h2>

                  <ul className="space-y-3">
                    {event.rules?.map((rule, index) => (
                      <li key={index} className="font-inter text-gray-300 flex gap-3">
                        <span className="text-amber-300 font-bold">✓</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              )}

            </div>

            {/* SIDEBAR FOR NON-SPORTS */}
            <div>

              {event.category !== "Sports" && (
                <div className="
                  bg-dark-maroon/40 rounded-xl p-6 sm:p-8
                  sticky top-24 space-y-6 border border-purple-light/20 shadow-lg
                ">

                  <div>
                    <h3 className="text-amber-300 uppercase text-sm font-bold mb-1">
                      Category
                    </h3>
                    <p className="font-semibold text-lg">{event.category}</p>
                  </div>

                  <div className="border-t border-purple-light/20 pt-6">
                    <h3 className="text-amber-300 uppercase text-sm font-bold mb-1">📍 Venue</h3>
                    <p className="text-gray-300 font-semibold">{event.venue}</p>
                  </div>

                  <div className="border-t border-purple-light/20 pt-6">
                    <h3 className="text-amber-300 uppercase text-sm font-bold mb-1">⏰ Timing</h3>
                    <p className="text-gray-300 font-semibold">{event.timing}</p>
                  </div>

                  <div className="border-t border-purple-light/20 pt-6">
                    <h3 className="text-amber-300 uppercase text-sm font-bold mb-1">📅 Date</h3>
                    <p className="text-gray-300 font-semibold">{event.date}</p>
                  </div>

                  <div className="border-t border-purple-light/20 pt-6">
                    <Link
                      to="/register"
                      className="btn-primary w-full block text-center py-3 text-lg font-semibold"
                    >
                      Register Now
                    </Link>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* RELATED EVENTS */}
      <section className="py-16 px-4 border-t border-purple-light/20">
        <div className="container-custom">

          <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-10">
            More {event.category} Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {events
              .filter(e => e.category === event.category && e._id !== event._id)
              .slice(0,3)
              .map(related => (
                <Link
                  key={related._id}
                  to={`/events/${related._id}`}
                  className="bg-purple-light/20 rounded-xl overflow-hidden border border-purple-light/30 hover:border-amber-300 transition hover:-translate-y-1"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-poppins font-bold text-lg">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}

          </div>

        </div>
      </section>

    </div>
  );
}
