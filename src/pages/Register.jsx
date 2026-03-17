import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

export default function Register() {

  const { events, loading } = useContext(EventContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    eventCategory: "Technical",
    teamName: "",
    teamMembers: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.event) {
      setMessage("Please select an event");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/registrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData) // ✅ EXACT MATCH
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          event: "",
          eventCategory: "Technical",
          teamName: "",
          teamMembers: ""
        });
      } else {
        setMessage(data.message || "❌ Registration failed");
      }

    } catch (err) {
      console.error(err);
      setMessage("⚠️ Server error");
    } finally {
      setSubmitting(false);
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white">
        <p className="text-sm animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white px-3 py-6 flex justify-center">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg border border-white/10">

        {/* NAV */}
        <button
          onClick={() => navigate("/events")}
          className="text-xs text-purple-300 mb-3 hover:underline"
        >
          ← View Events
        </button>

        <h1 className="text-xl font-semibold text-center mb-4">
          Event Registration
        </h1>

        {/* FEES */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-4 text-xs">
          <p className="text-amber-300 font-medium mb-1">Entry Fees</p>
          <div className="flex justify-between">
            <span>Single</span>
            <span>₹30</span>
          </div>
          <div className="flex justify-between">
            <span>Group</span>
            <span>₹100</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2.5 text-sm rounded-md bg-white/10 border border-white/20 focus:border-amber-300 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2.5 text-sm rounded-md bg-white/10 border border-white/20 focus:border-amber-300 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2.5 text-sm rounded-md bg-white/10 border border-white/20 focus:border-amber-300 outline-none"
          />

          {/* EVENT SELECT (IMPORTANT FIX) */}
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
            className="w-full p-2.5 text-sm rounded-md bg-white/10 border border-white/20 focus:border-amber-300 outline-none"
          >
            <option value="">Select Technical Event</option>
            {events
              .filter(e => e.category === "Technical")
              .map((e) => (
                <option key={e._id} value={e.title}>
                  {e.title}
                </option>
              ))}
          </select>

          {/* TEAM DETAILS */}
          <input
            type="text"
            name="teamName"
            placeholder="Team Name (optional)"
            value={formData.teamName}
            onChange={handleChange}
            className="w-full p-2.5 text-sm rounded-md bg-white/10 border border-white/20 focus:border-amber-300 outline-none"
          />

          <input
            type="text"
            name="teamMembers"
            placeholder="Team Members (comma separated)"
            value={formData.teamMembers}
            onChange={handleChange}
            className="w-full p-2.5 text-sm rounded-md bg-white/10 border border-white/20 focus:border-amber-300 outline-none"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 bg-amber-300 text-gray-900 text-sm font-semibold py-2.5 rounded-md hover:bg-amber-400 transition"
          >
            {submitting ? "Registering..." : "Register"}
          </button>

        </form>

        {message && (
          <p className="mt-3 text-center text-xs text-gray-300">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}