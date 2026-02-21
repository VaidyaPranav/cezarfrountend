import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import Championship from './components/Championship';
import AdminLogin from "./admin/pages/AdminLogin";
import AdminLayout from "./admin/components/AdminLayout";
import AdminRoute from "./admin/components/AdminRoute";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminResults from "./admin/pages/AdminResults";
import AdminRegistrations from "./admin/pages/AdminRegistrations";
import AdminMessages from "./admin/pages/AdminMessages";
import AdminPosts from './admin/pages/AdminPosts';
import AdminEvents from './admin/pages/AdminEvents';
import About from './pages/logo.';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/championship" element={<Championship />} />
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/admin/results" element={<AdminResults />} />
          <Route path="/admin/registrations" element={<AdminRegistrations />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/" element={<About />} />


<Route
  path="/admin"
  element={ 
    <AdminRoute>
      <AdminLayout/>
    </AdminRoute>
  }
>
  <Route path="dashboard" element={<AdminDashboard/>}/>
  <Route path="results" element={<AdminResults/>}/>

</Route>
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
