// DataTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ApprovedData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the database using Axios
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

  const handleViewClick = (postId) => {
    // Add logic to handle the view button click
    console.log(`View button clicked for post ID: ${postId}`);
  };

  return (
    <div className="ml-72 mr-48">
      <h2 className="text-2xl font-bold mb-4 mt-8 text-center">
        Approved Posts
      </h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Post ID
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Post Title
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Post Text
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Category
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Email
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Location
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Status
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300 bg-slate-200">
              Created At
            </th>
            <th className="py-2 px-4 border-b bg-slate-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => item.moderated === 1)
            .map((item) => (
              <tr key={item.post_id}>
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  {item.post_id}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  {item.post_title}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300 max-w-xs truncate">
                  {item.post_txt}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  {item.category}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  {item.user_email}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  {item.post_city}, {item.post_state}, {item.post_country}
                </td>
                <td
                  className={`py-2 px-4 border-b border-r border-gray-300 text-green-500`}
                >
                  Approved
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  {item.post_created_at}
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex flex-col space-y-2 mx-2">
                    <button
                      className="bg-blue-500 text-white text-sm px-3 py-2 rounded-md"
                      onClick={() => handleViewClick(item.post_id)}
                    >
                      View
                    </button>
                    <button
                      className="bg-slate-500 text-slate-300 text-sm px-3 py-2 rounded-md"
                      onClick={() => handleViewClick(item.post_id)}
                      disabled
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white text-sm px-3 py-2 rounded-md"
                      onClick={() => handleViewClick(item.post_id)}
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedData;
