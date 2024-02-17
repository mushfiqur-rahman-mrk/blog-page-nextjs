"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const handleRegister = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto my-20 border rounded-xl p-5 shadow-xl">
          <h1 className="font-bold text-2xl text-orange-600 text-center">
            Creat New Account
          </h1>
          <div>
            <label
             
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="first_name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-orange-500 block w-full p-2.5 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Your Password
            </label>
            <input
              type="password"
              id="first_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            onClick={handleRegister}
            className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl mt-5"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
