import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/userSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(signUp({ uid: user.uid, email: user.email }));
        alert("User Registered Successfully");
        navigate("/body");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message)
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleAddUser}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
          <Link to="/">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition-colors text-sm"
            >
              Already Registered?Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
