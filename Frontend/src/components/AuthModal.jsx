import { useState } from "react";
import { loginUser, registerUser } from "../api/auth";

const AuthModal = ({ authMode, setAuthMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  if (!authMode) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      let response;

      if (authMode === "signup") {
        response = await registerUser(formData);
      } else {
        response = await loginUser({
          email: formData.email,
          password: formData.password,
        });
      }

      alert(response.data.message);

      console.log(response.data);

      clearForm();

      setAuthMode(null);
    } catch (error) {
      console.log(error.response?.data);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-105 rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={() => setAuthMode(null)}
          className="absolute right-5 top-5 text-2xl hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="mb-8 text-center text-3xl font-bold">
          {authMode === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {authMode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border p-3 focus:border-green-500 outline-none"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 focus:border-green-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 focus:border-green-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-600 disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : authMode === "login"
                ? "Login"
                : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          {authMode === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                className="font-semibold text-green-600"
                onClick={() => {
                  clearForm();
                  setAuthMode("signup");
                }}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                className="font-semibold text-green-600"
                onClick={() => {
                  clearForm();
                  setAuthMode("login");
                }}
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
