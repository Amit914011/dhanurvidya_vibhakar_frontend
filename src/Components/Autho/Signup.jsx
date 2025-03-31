import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data) => {
    setLoading(true);
    console.log("Signup Data:", data);
    setTimeout(() => {
      setLoading(false);
      alert("Signup successful!");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 pt-20">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#810000]">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 border rounded mt-1"
              placeholder="Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div className="mt-3">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded mt-1"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mt-3 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full p-2 border rounded mt-1 pr-10"
              placeholder="Password"
            />
            <span className="absolute right-3 top-3 cursor-pointer text-gray-500" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="mt-3 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              className="w-full p-2 border rounded mt-1 pr-10"
              placeholder="Confirm Password"
            />
            <span className="absolute right-3 top-3 cursor-pointer text-gray-500" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#810000] text-white p-2 rounded mt-4 hover:bg-[#5f1c1c] flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
            ) : (
              "Signup"
            )}
          </button>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
