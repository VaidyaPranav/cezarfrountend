import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-800 via-purple-900 to-blue-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-poppins font-bold  text-amber-300 pt-5 mb-4">CEZAR 2026</h3>
            <p className="font-inter text-sm text-gray-300 leading-relaxed pt-2">
              Three days of celebration, competition, and creativity showcasing the best talent
              from our college community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" pt-5 font-poppins font-bold text-amber-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="font-inter text-sm text-gray-300 hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="font-inter text-sm text-gray-300 hover:text-amber-300 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/updates" className="font-inter text-sm text-gray-300 hover:text-amber-300 transition-colors">
                  Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-inter text-sm text-gray-300 hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className=" pt-5 font-poppins font-bold text-amber-300 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm font-inter text-gray-300">
              <li>Email: cezar2k26@gmail.com</li>
              <li>Address: JNTUHUCEJ(Nachupally) College Campus</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className=" pt-5 font-poppins font-bold text-amber-300 mb-4">Follow Us</h3>
            <div className="flex gap-4">

              <a href="https://www.instagram.com/cezar_2k26/" className="text-gray-300 hover:text-amber-300 transition-colors">
                Instagram
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-purple-light/20 pt-8">
          <p className="text-center font-inter text-sm text-gray-400">
            &copy; {currentYear} CEZAR Fest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}