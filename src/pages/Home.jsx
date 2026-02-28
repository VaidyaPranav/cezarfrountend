import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  /* ---------------- EVENT CAROUSEL ---------------- */
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    { id:1, title:"TECHNICAL", description:"Project Expo, Code-a-thon, Quiz Divas , Vishleshan", color:"bg-cyan-950", image:"tech.png" },
    { id:2, title:"NON-TECHNICAL", description:"Gripper, Nitrocharge, Line of control", color:"bg-blue-400", image:"./nontech.png" },
    { id:3, title:"FLASH MOB", description:"Dance, Singing, Band performance", color:"bg-gray-500", image:"./mob.jpeg" },
    { id:4, title:"CULT NIGHT", description:"Dance, Singing, Band performance", color:"bg-black", image:"./cultnight.jpeg" },
    { id:5, title:"SPORTS", description:"Basketball, Volleyball, Cricket , etc.", color:"bg-green-800", image:"./sports.jpeg" },
  ];

  const nextEvent = () => setCurrentEventIndex(p => (p+1)%events.length);
  const prevEvent = () => setCurrentEventIndex(p => (p-1+events.length)%events.length);

  useEffect(()=>{
    const interval=setInterval(()=>setCurrentEventIndex(p=>(p+1)%events.length),6000);
    return ()=>clearInterval(interval);
  },[]);

  /* ---------------- LATEST POSTS ---------------- */
  const [latestPosts,setLatestPosts]=useState([]);

  useEffect(()=>{

    const API =
      import.meta.env.VITE_API ;

    fetch(`${import.meta.env.VITE_API_URL}/api/posts`)
      .then(r=>r.json())
      .then(data=>{
        if(!Array.isArray(data)) return;

        const newest=[...data]
          .sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
          .slice(0,5);

        setLatestPosts(newest);
      })
      .catch(()=>setLatestPosts([]));

  },[]);

  /* ---------------- UI ---------------- */
  return(
    <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      {/* HERO */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-2xl mx-auto text-center space-y-6 pt-10 sm:pt-16 md:pt-20">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            JOIN THE FEST 🔥
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Be part of the most awaited annual festival of the year.
            Join exciting events, showcase your talents, and win amazing prizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/events"
              className="bg-amber-400 text-black py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:bg-amber-300 transition shadow">
              Explore Events
            </Link>
          </div>
        </div>
        <div className="max-w-3xl mx-auto pt-5 sm:pt-10">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 ">
            Latest Updates
          </h2>

          <div className="space-y-4 ">

            {latestPosts.length===0 && (
              <div className="text-center text-gray-400">
                No updates yet
              </div>
            )}

            {latestPosts.map(p=>(
              <div key={p._id}
                className="bg-purple-900/40 border border-white/10 rounded-lg p-4">

                <div className="text-xs text-white/70 mb-1">
                  admin: {p.adminName}
                </div>

                <div className="text-sm sm:text-base">
                  {p.text}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
      
      {/* EVENTS CAROUSEL */}
      <section className="py-16 sm:py-20 md:py-28 bg-white/5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Event Categories
          </h2>

          <div className="relative overflow-hidden py-4">

            <div className="flex transition-transform duration-500"
              style={{transform:`translateX(-${currentEventIndex*100}%)`}}>

              {events.map(event=>(
                <div key={event.id} className="min-w-full px-2 sm:px-4">
                  <div className={`${event.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col justify-between min-h-[400px] sm:min-h-[450px] md:min-h-[500px]`}>

                    <img src={event.image}
                      alt={event.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-4"/>

                    <div className="space-y-2 grow">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base opacity-90">
                        {event.description}
                      </p>
                    </div>

                   

                  </div>
                </div>
              ))}

            </div>

            {/* NAV BUTTONS */}
            <button onClick={prevEvent}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow flex items-center justify-center hover:bg-amber-300 transition z-10">
              ←
            </button>

            <button onClick={nextEvent}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow flex items-center justify-center hover:bg-amber-300 transition z-10">
              →
            </button>

            {/* DOTS */}
            <div className="flex justify-center gap-2 pt-6">
              {events.map((_,i)=>(
                <button key={i}
                  onClick={()=>setCurrentEventIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i===currentEventIndex ? "bg-amber-400 w-6" : "bg-gray-500 w-2"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 🔔 LATEST UPDATES */}
      

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-white/5 text-center">
        <div className="max-w-xl mx-auto space-y-5 px-2">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Ready to Join?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Limited slots available. Register now and be part of the celebration.
          </p>

          <Link to="/register"
            className="inline-block bg-amber-400 text-black py-2 sm:py-3 px-6 sm:px-8 rounded-xl font-semibold hover:bg-amber-300 transition shadow">
            Register Today
          </Link>

        </div>
      </section>

    </div>
  );
}