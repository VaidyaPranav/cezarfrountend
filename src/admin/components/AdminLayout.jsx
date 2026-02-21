import { Link, Outlet } from "react-router-dom";

export default function AdminLayout(){

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black/40 border-r border-purple-500/20 p-6 space-y-4">

        <h2 className="text-xl font-bold mb-6">CEZAR Admin</h2>

        <nav className="flex flex-col gap-3">

          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/events">Events</Link>
          <Link to="/admin/results">Results</Link>
          <Link to="/admin/registrations">Registrations</Link>
          <Link to="/admin/messages">Messages</Link>
          <Link to="/admin/posts">Posts</Link>

        </nav>

        <button
          className="mt-10 text-red-400"
          onClick={()=>{
            localStorage.removeItem("adminToken");
            window.location="/admin/login";
          }}
        >
          Logout
        </button>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <Outlet/>
      </main>

    </div>
  );
}
