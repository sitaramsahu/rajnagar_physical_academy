"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ResponsiveSplitScreenAuth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const res = await signIn("user-credentials", {
      redirect: false,
      ...loginData,
      callbackUrl: "/dashboard",
    });

    if (res.error) setError("Invalid user credentials ❌");
    else router.push(res.url || "/profile");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await res.json();
      setLoading(false);

      if (res.ok) setIsSignUp(false);
      else setError(data.error || "Something went wrong ❌");
    } catch (err) {
      setLoading(false);
      setError("Server error ❌");
    }
  };

  return (
    <div
      className={`flex min-h-screen flex-col md:flex-row transition-all duration-700`}
    >
      {/* Form Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white text-gray-800 transition-all duration-700 order-1 md:order-1">
        {isSignUp ? (
          <form className="w-full max-w-md space-y-4" onSubmit={handleRegister}>
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            {error && <p className="text-center text-red-500">{error}</p>}
            <input
              type="text"
              placeholder="Full Name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              className="w-full p-2 rounded border"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white font-bold p-2 rounded hover:bg-green-700"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
            <p
              className="text-center mt-2 text-sm cursor-pointer hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Already have an account? Sign In
            </p>
          </form>
        ) : (
          <form className="w-full max-w-md space-y-4" onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
            {error && <p className="text-center text-red-500">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="w-full p-2 rounded border"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold p-2 rounded hover:bg-green-700"
            >
              Login
            </button>
            <p
              className="text-center mt-2 text-sm cursor-pointer hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Don't have an account? Sign Up
            </p>
          </form>
        )}
      </div>

      {/* Info Panel */}
      <div className="flex-1 bg-green-600 text-white flex flex-col justify-center items-center p-8 transition-all duration-700 order-2 md:order-2">
        <div className="text-center max-w-sm">
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Welcome!" : "Welcome Back!"}
          </h2>
          <p className="text-white">
            {isSignUp
              ? "Create an account to get started with our services."
              : "Sign in to access your dashboard and manage your profile."}
          </p>
        </div>
      </div>
    </div>
  );
}
