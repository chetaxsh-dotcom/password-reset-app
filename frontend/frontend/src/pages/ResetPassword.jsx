import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLock } from "react-icons/fa";

function ResetPassword() {

  const { token } = useParams();
   console.log("TOKEN:", token)

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      toast.success(res.data.message || "Password updated");


    } catch (error) {
      toast.error(
        error.response?.data?.message || "Link expired. Please request a new reset link.",
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="flex items-center border rounded-lg mb-4 px-3">

            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 outline-none"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ResetPassword;