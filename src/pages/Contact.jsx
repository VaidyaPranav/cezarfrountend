import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_API_URL}/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-linear-to-b from-gray-800 via-purple-900 to-blue-900 text-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-dark-purple via-dark-maroon to-dark-purple text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-purple-light/20">
        <div className="container-custom">
          <h1 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 text-white">
            Get in Touch
          </h1>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="py-8 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-maroon/40 rounded-xl p-4 sm:p-8 border border-purple-light/20">
                <h2 className="font-poppins font-bold text-xl sm:text-2xl text-white mb-6 sm:mb-8">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="bg-green-500/20 border border-green-400 text-green-300 p-3 sm:p-4 rounded-lg mb-6 sm:mb-8 font-inter text-sm sm:text-base">
                    ✓ Thank you! Your message has been received. We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-7">
                  <div>
                    <label className="block font-inter text-gray-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-purple-light/30 font-inter bg-dark-purple/50 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/30 transition"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-gray-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-purple-light/30 font-inter bg-dark-purple/50 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/30 transition"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-gray-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-purple-light/30 font-inter bg-dark-purple/50 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/30 transition"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-gray-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us your thoughts..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-purple-light/30 font-inter bg-dark-purple/50 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/30 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full font-semibold text-base sm:text-lg py-2.5 sm:py-3 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-purple-light/20 rounded-xl p-4 sm:p-6 border border-purple-light/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">📍</span>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-base sm:text-lg mb-1 sm:mb-2">
                      Location
                    </h3>
                    <p className="font-inter text-gray-300 text-sm sm:text-base leading-relaxed">
                      JNTUHUCEJ Kondagattu<br />
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-light/20 rounded-xl p-4 sm:p-6 border border-purple-light/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">📧</span>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-base sm:text-lg mb-2 sm:mb-3">
                      Email
                    </h3>
                    <p className="font-inter text-amber-300 text-sm sm:text-base">
                      <a href="mailto:info@fest.com" className="hover:text-amber-200 transition break-all">
                        info@fest.com
                      </a>
                    </p>
                    <p className="font-inter text-amber-300 text-sm sm:text-base">
                      <a href="mailto:support@fest.com" className="hover:text-amber-200 transition break-all">
                        support@fest.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-light/20 rounded-xl p-4 sm:p-6 border border-purple-light/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">📞</span>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-base sm:text-lg mb-2 sm:mb-3">
                      Phone
                    </h3>
                    <p className="font-inter text-amber-300 text-sm sm:text-base">
                      <a href="tel:+919876543210" className="hover:text-amber-200 transition">
                        +91 9876 543 210
                      </a>
                    </p>
                    <p className="font-inter text-amber-300 text-sm sm:text-base">
                      <a href="tel:+919876543211" className="hover:text-amber-200 transition">
                        +91 9876 543 211
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
