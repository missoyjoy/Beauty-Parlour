// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      toast.success("Login successful!", { position: "bottom-right" });

      // redirect to booking page
      setTimeout(() => {
        navigate("/booking");
      }, 1200);
    } else {
      toast.error("Invalid email or password", { position: "bottom-right" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black font-serif px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-center font-bold text-[#E1C699] mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1C699]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1C699]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#E1C699] text-black font-semibold py-3 rounded-lg hover:scale-105 transition transform"
          >
            Login
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
}

