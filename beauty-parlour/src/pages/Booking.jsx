// src/pages/Booking.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const services = [
    { name: "Massage", price: 6000 },
    { name: "Hair Beauty", price: 5000 },
    { name: "Barbershop", price: 3500 },
    { name: "Waxing", price: 4000 },
    { name: "Sauna", price: 3000 },
    { name: "Body Scrub", price: 4500 },
    { name: "Pedicure", price: 2500 },
    { name: "Manicure", price: 2500 },
  ];

  // Check if user logged in
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedUser) {
      toast.info("Please login first");
      navigate("/login");
    } else {
      setName(loggedUser.name);
      setEmail(loggedUser.email);
    }
  }, [navigate]);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!phone || !service || !date || !time) {
      toast.error("Please fill all fields");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const exists = bookings.some(
      (b) =>
        b.service === service &&
        b.date === date &&
        b.time === time
    );

    if (exists) {
      toast.error(
        `${service} is already booked on ${date} at ${time}`
      );
      return;
    }

    const selectedService = services.find((s) => s.name === service);

    const newBooking = {
      name,
      email,
      phone,
      service,
      price: selectedService.price,
      date,
      time,
    };

    bookings.push(newBooking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    // save booking for payment page
    localStorage.setItem("pendingBooking", JSON.stringify(newBooking));

    toast.success("Booking saved. Proceeding to payment...");

    setTimeout(() => {
      navigate("/payment");
    }, 1500);

    setPhone("");
    setService("");
    setPrice("");
    setDate("");
    setTime("");
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center font-serif px-4 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">

        <h2 className="text-3xl font-bold text-center text-[#E1C699] mb-6">
          Book an Appointment
        </h2>

        <form onSubmit={handleBooking} className="space-y-4">

          <input
            type="text"
            value={name}
            readOnly
            className="w-full p-3 border rounded bg-gray-100"
          />

          <input
            type="email"
            value={email}
            readOnly
            className="w-full p-3 border rounded bg-gray-100"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              const selected = services.find(
                (s) => s.name === e.target.value
              );
              setPrice(selected.price);
            }}
            className="w-full p-3 border rounded"
          >
            <option value="">Select Service</option>

            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={price ? `Ksh ${price}` : ""}
            readOnly
            className="w-full p-3 border rounded bg-gray-100"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-[#E1C699] text-black font-semibold py-3 rounded hover:scale-105 transition"
          >
            Book Now
          </button>

        </form>
      </div>

      <ToastContainer position="bottom-right" />
    </section>
  );
}
