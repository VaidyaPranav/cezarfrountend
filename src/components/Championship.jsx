import { useEffect, useState } from "react";
import ChampionshipDashboard from "./ChampionshipDashboard";
import { fetchEvents } from "../api/events";



export default function Championship() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 min-h-screen text-white flex items-center justify-center">
        Loading championship data...
      </div>
    );
  }

  return (
    <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 min-h-screen text-white">
      <ChampionshipDashboard events={events} />
    </div>
  );
}
