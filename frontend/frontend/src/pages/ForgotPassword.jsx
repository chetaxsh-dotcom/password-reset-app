import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      toast.success(res.data.message || "Reset link sent");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Request failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter your email to receive reset link
        </p>

        <form onSubmit={handleSubmit}>

          <div className="flex items-center border rounded-lg mb-4 px-3">

            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 outline-none"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Send Reset Link
          </button>

        </form>

      </div>

    </div>
  );
}

export default ForgotPassword;