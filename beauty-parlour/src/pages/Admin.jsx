import React, { useEffect, useState } from "react";

export default function Admin() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);

  }, []);


  const deleteBooking = (index) => {

    const updatedBookings = bookings.filter((_, i) => i !== index);

    setBookings(updatedBookings);

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

  };


  return (
    <section className="min-h-screen bg-black text-white px-6 py-10 font-serif">

      <h1 className="text-4xl text-center text-[#E1C699] font-bold mb-10">
        Admin Dashboard
      </h1>

      {bookings.length === 0 ? (

        <p className="text-center text-lg">No bookings yet</p>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full bg-white text-black rounded-lg overflow-hidden">

            <thead className="bg-[#E1C699]">

              <tr>

                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Service</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Price</th>
                <th className="p-3">Action</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking, index) => (

                <tr key={index} className="border-t">

                  <td className="p-3">{booking.name}</td>
                  <td className="p-3">{booking.email}</td>
                  <td className="p-3">{booking.phone}</td>
                  <td className="p-3">{booking.service}</td>
                  <td className="p-3">{booking.date}</td>
                  <td className="p-3">{booking.time}</td>
                  <td className="p-3">Ksh {booking.price}</td>

                  <td className="p-3">

                    <button
                      onClick={() => deleteBooking(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:scale-105"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </section>
  );
}
