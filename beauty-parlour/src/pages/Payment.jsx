// src/pages/Payment.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {

  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");

  useEffect(() => {

    const pending = JSON.parse(localStorage.getItem("pendingBooking"));

    if (!pending) {
      navigate("/");
    } else {
      setBooking(pending);
    }

  }, [navigate]);

  const handleShowPayment = () => {
    setShowPaymentOptions(true);
  };

  const handleConfirmPayment = () => {

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    const ticket = "TICKET-" + Math.floor(Math.random() * 1000000);

    setTicketNumber(ticket);

    alert(
      `Payment Successful!\n\nTicket Number: ${ticket}\n\nPlease show this ticket when you arrive.`
    );

    localStorage.removeItem("pendingBooking");
  };

  if (!booking) return null;

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 font-serif">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5">

        <h2 className="text-3xl font-bold text-center text-[#E1C699]">
          Payment
        </h2>

        <div className="space-y-2 text-sm">

          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          <p><strong>Service:</strong> {booking.service}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>

          <p className="text-lg font-bold">
            Amount: Ksh {booking.price}
          </p>

        </div>


        {/* STEP 1: PAY BOOKING FEE BUTTON */}

        {!showPaymentOptions && !ticketNumber && (

          <button
            onClick={handleShowPayment}
            className="w-full bg-[#E1C699] text-black font-semibold py-3 rounded hover:scale-105 transition"
          >
            Pay Booking Fee
          </button>

        )}


        {/* STEP 2: SHOW PAYMENT OPTIONS */}

        {showPaymentOptions && !ticketNumber && (

          <div className="space-y-4">

            <label className="font-semibold">
              Select Payment Method
            </label>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 border rounded"
            >

              <option value="">Choose Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Mpesa">M-Pesa</option>
              <option value="Paypal">PayPal</option>
              <option value="Cheque">Cheque</option>

            </select>

            <button
              onClick={handleConfirmPayment}
              className="w-full bg-[#E1C699] text-black font-semibold py-3 rounded hover:scale-105 transition"
            >
              Confirm Payment
            </button>

          </div>

        )}


        {/* STEP 3: AFTER PAYMENT */}

        {ticketNumber && (

          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#E1C699] text-black font-semibold py-3 rounded hover:scale-105 transition"
          >
            Go Back Home
          </button>

        )}

      </div>

    </section>
  );
}

