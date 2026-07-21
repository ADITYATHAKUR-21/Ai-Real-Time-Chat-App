import { useState } from "react";
import axios from "axios";

const AuthModal = ({ authMode, setAuthMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!authMode) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (authMode === "signup") {
        response = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
          },
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/v1/auth/login",
          {
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
          },
        );
      }

      console.log(response.data);

      alert(response.data.message);

      setAuthMode(null);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-105 rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close Button */}

        <button
          onClick={() => setAuthMode(null)}
          className="absolute right-5 top-5 text-2xl hover:text-red-500"
        >
          ✕
        </button>

        {/* Heading */}

        <h2 className="mb-8 text-center text-3xl font-bold">
          {authMode === "login" ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {authMode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            {authMode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch */}

        <div className="mt-6 text-center">
          {authMode === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setAuthMode("signup")}
                className="font-semibold text-green-600"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setAuthMode("login")}
                className="font-semibold text-green-600"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
