import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    setLoading(true);
    console.log("Login Data:", data);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating API call delay
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#810000]">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded mt-1"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mt-3 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full p-2 border rounded mt-1 pr-10"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#810000] text-white p-2 rounded mt-4 hover:bg-[#5f1c1c] flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
            ) : (
              "Login"
            )}
          </button>

          {/* Signup Link */}
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? {" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
