import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../api/events';
import { eventCategories } from '../data/mockData';

export default function Events() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH EVENTS FROM BACKEND
  useEffect(() => {
    fetchEvents()
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading events:", err);
        setLoading(false);
      });
  }, []);

  // FILTER EVENTS
  const filteredEvents =
    selectedCategory === 'All'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // LOADING STATE
  if (loading) {
    return (
      <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">

      {/* PAGE HEADER */}
      <section className="bg-linear-to-r from-dark-purple via-dark-maroon to-dark-purple text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-purple-light/20">
        <div className="container-custom">
          <h1 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 text-white">
            All Events
          </h1>
          <p className="font-inter text-base sm:text-lg text-gray-300">
            Browse and register for exciting events happening during the fest
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-dark-purple/50 border-b border-purple-light/10">
        <div className="container-custom">

          <h2 className="font-poppins font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-white">
            Filter by Category
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-4">

            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 sm:px-5 py-2 rounded-full font-inter text-sm sm:text-base font-semibold transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-amber-300 text-gray-900 shadow-lg'
                  : 'bg-purple-light text-white border border-purple-light/50 hover:border-amber-300 hover:text-amber-300'
              }`}
            >
              All Events
            </button>

            {eventCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-3 sm:px-5 py-2 rounded-full font-inter text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-amber-300 text-gray-900 shadow-lg'
                    : 'bg-purple-light text-white border border-purple-light/50 hover:border-amber-300 hover:text-amber-300'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">

          <p className="font-inter text-gray-300 mb-8 sm:mb-12 text-base sm:text-lg">
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">

            {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}

          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12 sm:py-20">
              <p className="font-inter text-gray-400 text-base sm:text-lg">
                No events found in this category. Try selecting another category.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
