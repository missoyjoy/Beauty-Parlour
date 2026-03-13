import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-white font-serif py-20 px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#E1C699] mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We would love to hear from you. Book an appointment, ask a question,
          or reach out for beauty consultations. Our team is ready to serve you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Contact Info */}
        <div className="bg-black text-white p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl text-[#E1C699] font-semibold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-6 text-lg">

            <div>
              <p className="text-[#E1C699] font-semibold">📞 Phone</p>
              <p>+254 700 000 000</p>
            </div>

            <div>
              <p className="text-[#E1C699] font-semibold">📧 Email</p>
              <p>beautyparlour@email.com</p>
            </div>

            <div>
              <p className="text-[#E1C699] font-semibold">📍 Location</p>
              <p>Nairobi, Kenya</p>
            </div>

            <div>
              <p className="text-[#E1C699] font-semibold">⏰ Working Hours</p>
              <p>Monday – Saturday: 9AM – 7PM</p>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl text-[#E1C699] font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1C699]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1C699]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1C699]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#E1C699] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition transform"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

