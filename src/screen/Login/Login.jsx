import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_name: username,
      password: password,
    };

    const url = "/SatsangeeAPI/api/Isadmin.php";

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);

        if (response.status == 200) {
          alert("Login Success");
        } else {
          alert("Login Failed");
        }
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status == 401) {
          alert("Unauthorized");
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="container bg-white rounded-lg shadow-md p-8 w-96">
        <h2 className="text-center text-2xl font-bold mb-8">ADMIN LOGIN</h2>
        <label htmlFor="user_name" className="block text-lg font-semibold mb-2">
          User Name
        </label>
        <input
          type="text"
          name="user_name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          autoComplete="off"
          required
          className="w-full px-4 py-3 mb-6 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200"
        />
        <label htmlFor="password" className="block text-lg font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoComplete="off"
          required
          className="w-full px-4 py-3 mb-6 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-green-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
