import React, { useState,useEffect } from "react";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { NavLink } from "react-router-dom";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { onAuthStateChanged,} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);

  // Google Sign-in
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  // Email/Password Sign-in
  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with email and password", error);
      setError(error.message);
    }
  };

  // Email/Password Register
  const handleEmailRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error registering with email and password", error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Fitness App</h1>

      

      {/* Email/Password Sign-in/Register Form */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {isRegistering ? "Register" : "Login"} with Email
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {/* Toggle between login and register */}
        <NavLink to="/">
        <button
          onClick={isRegistering ? handleEmailRegister : handleEmailLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all w-full"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        </NavLink>
      
          <NavLink to="/">
          <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="mt-4 text-blue-600 hover:underline w-full"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
          </NavLink>

          {/* Google Sign-in Button */}
      <NavLink to="/">
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all mb-6"
        >
          Sign in with Google
        </button>
      </NavLink>
       
      </div>
    </div>
  );
};

export default Login;

