import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="bg-linear-to-br from-purple-light to-dark-maroon rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:translate-y-[-4px] border border-purple-light/30">
      <div className="relative overflow-hidden h-32 sm:h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-auto object-cover rounded-t-xl hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-amber-300 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
          {event.category}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="font-poppins font-bold text-base sm:text-lg text-white mb-2 sm:mb-3 line-clamp-2">
          {event.title}
        </h3>

        <p className="font-inter text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm font-inter text-gray-400">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⏰</span>
            <span>{event.timing}</span>
          </div>
        </div>

        <Link
          to={`/events/${event._id}`}
          className="w-full block text-center btn-primary text-xs sm:text-sm py-2 sm:py-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
