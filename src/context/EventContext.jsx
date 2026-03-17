import { createContext, useState, useEffect } from "react";
import { fetchEvents } from "../api/events";

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  return (
    <EventContext.Provider value={{ events, loading }}>
      {children}
    </EventContext.Provider>
  );
}