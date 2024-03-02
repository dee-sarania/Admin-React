// DataTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://packetly.in/SatsangeeAPI/api/getAllPosts.php")
      .then((response) => {
        // Check if the response data has the expected structure
        if (response.data.Status && response.data.Status.List) {
          setData(response.data.Status.List);
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="ml-60 mr-48">
      <h2 className="text-2xl font-bold mb-4 mt-8 text-center">All Posts</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Post ID</th>
            <th className="py-2 px-4 border-b">Post Title</th>
            <th className="py-2 px-4 border-b">Post Text</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">City</th>
            <th className="py-2 px-4 border-b">State</th>
            <th className="py-2 px-4 border-b">Country</th>
            <th className="py-2 px-4 border-b">Moderated</th>
            <th className="py-2 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.post_id}>
              <td className="py-2 px-4 border-b">{item.post_id}</td>
              <td className="py-2 px-4 border-b">{item.post_title}</td>
              <td className="py-2 px-4 border-b">{item.post_txt}</td>
              <td className="py-2 px-4 border-b">{item.category}</td>
              <td className="py-2 px-4 border-b">{item.user_email}</td>
              <td className="py-2 px-4 border-b">{item.post_city}</td>
              <td className="py-2 px-4 border-b">{item.post_state}</td>
              <td className="py-2 px-4 border-b">{item.post_country}</td>
              <td className="py-2 px-4 border-b">{item.moderated}</td>
              <td className="py-2 px-4 border-b">{item.post_created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
