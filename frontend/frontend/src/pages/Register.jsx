import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        `${API}/api/auth/register`,
        formData
      );

      toast.success(res.data.message || "Registration successful");

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="flex items-center border rounded-lg mb-4 px-3">
            <FaUser className="text-gray-400" />

            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full p-3 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg mb-4 px-3">
            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full p-3 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg mb-4 px-3">
            <FaLock className="text-gray-400" />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full p-3 outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;