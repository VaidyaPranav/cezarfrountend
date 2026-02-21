export default function PostCard({ post }) {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-purple-900 to-blue-900 text-white rounded-xl overflow-hidden">
      <div className="relative overflow-hidden h-32 sm:h-40">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 sm:p-5">
        <span className="text-xs sm:text-sm font-inter text-amber-300 font-semibold">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>

        <h3 className="font-poppins font-bold text-base sm:text-lg text-white mt-2 mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="font-inter text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
          {post.description}
        </p>

        <a href="#" className="inline-block text-amber-300 font-semibold font-inter text-xs sm:text-sm hover:text-amber-200 transition-colors">
          Read More →
        </a>
      </div>
    </div>
  );
}
