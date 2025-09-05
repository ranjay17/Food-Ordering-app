import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User Login Successfully");
        dispatch(login({ uid: user.uid, email: user.email }));
        navigate("/body");
      })
      .catch((err) => {
        console.log(err);
        alert("invalid input");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSignIn}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="w-[48%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <Link to="/signup">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition-colors text-sm"
            >
              Not Registered? Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
