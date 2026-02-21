import { useState } from 'react';
import { eventsData } from '../data/mockData';

export default function Register() {

  const [formData, setFormData] = useState({
    name:'',
    college:'',
    phone:'',
    email:'',
    event:'',
    eventCategory:'',
    teamName:'',
    teamMembers:'',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/registrations`,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(formData)
      });

      if(!res.ok) throw new Error("Failed");

      setSubmitted(true);

      setFormData({
        name:'',
        college:'',
        phone:'',
        email:'',
        event:'',
        eventCategory:'',
        teamName:'',
        teamMembers:'',
      });

    } catch(err){
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      {/* Header */}
      <section className="bg-linear-to-r from-dark-purple via-dark-maroon to-dark-purple pt-8 pb-8 px-4 border-b border-purple-light/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-poppins font-bold text-4xl mb-2">
            Event Registration
          </h1>
          <p className="text-gray-300">
            Fill the form below to register for your favorite events
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">

          {submitted ? (
            <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-8 text-center">
              <h2 className="text-2xl text-green-400 mb-2 font-bold">
                ✓ Registration Successful!
              </h2>
              <p className="text-green-300">
                Thank you for registering.
              </p>
            </div>
          ) : (

          <form onSubmit={handleSubmit}
                className="bg-linear-to-br from-purple-light to-dark-maroon rounded-xl shadow-2xl p-8 space-y-6 border border-purple-light/30">

            {/* NAME */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name and roll no"
              className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-purple-light/30"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-purple-light/30"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-purple-light/30"
            />

            {/* EVENT DROPDOWN — FIXED */}
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-purple-700 border border-purple-light/30"
            >

              <option value="">Choose Event</option>

              {eventsData
                .filter(e => ["Technical","Non-Technical"].includes(e.category))
                .map(e => (
                  <option key={e.id} value={e.title}>
                    {e.title}
                  </option>
              ))}

            </select>

            {/* CATEGORY DROPDOWN — FIXED CONTROLLED */}
            <select
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-purple-700 border border-purple-light/30"
            >
              <option value="">Choose Category</option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
              <option value="Flash Mob">Flash Mob</option>
              <option value="Sports">Sports</option>
              <option value="Cult Night">Cult Night</option>
            </select>

            {/* TEAM */}
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="Team Name"
              className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-purple-light/30"
            />

            <textarea
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleChange}
              placeholder="Team Members"
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-purple-light/30"
            />

            <button
              type="submit"
              className="w-full btn-primary py-3 font-semibold text-lg"
            >
              Register Now
            </button>

          </form>

          )}

        </div>
      </section>

    </div>
  );
}
