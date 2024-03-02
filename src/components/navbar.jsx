import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-60 p-4">
      <h2 className="text-2xl font-bold mb-20 mt-10 ml-4">
        Admin
        <br />
        Dashboard
      </h2>
      <ul>
        <li className="py-2 font-semibold text-lg my-2 ml-4">All Posts</li>
        <li className="py-2 font-semibold text-lg my-2 ml-4">Pending Posts</li>
        <li className="py-2 font-semibold text-lg my-2 ml-4">Approved Posts</li>
        <li className="py-2 font-semibold text-lg my-2 ml-4">Rejected Posts</li>
      </ul>
    </div>
  );
};

export default Navbar;
