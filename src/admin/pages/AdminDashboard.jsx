export default function AdminDashboard(){

  return(
    <div className="container-custom py-8 sm:py-12 px-4 sm:px-6 text-white">

      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        Admin Dashboard
      </h1>

      <p className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-10">
        Welcome to CEZAR Fest admin panel.
      </p>

      

    </div>
  );
}

function Card({title}){
  return(
    <div className="bg-purple-900/40 border border-purple-light/20 p-4 sm:p-6 rounded-xl hover:bg-purple-900/60 transition-colors cursor-pointer">
      <div className="text-base sm:text-lg font-semibold">{title}</div>
    </div>
  );
}
