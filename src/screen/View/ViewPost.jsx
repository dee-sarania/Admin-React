import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewPost = () => {
  const [postData, setPostData] = useState(null);
  const { post_id } = useParams(); // Change 'post_id' to 'postId'

  useEffect(() => {
    // Fetch data for the specific post using Axios
    axios
      .get('https://packetly.in/SatsangeeAPI/api/getPost.php?post_id=${post_id}')
      .then((response) => {
        // Check if the response data has the expected structure
        if (response.status == 200 ) {
          setPostData(response.data.Result);
        } else {
          console.error("Invalid data format or post not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [post_id]);

  if (!postData) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="ml-60 mr-48">
      <h2 className="text-2xl font-bold mb-4 mt-8 text-center">View Post</h2>
      {postData ? (
        <div className="bg-white border border-gray-300 p-4">
          <h3 className="text-lg font-bold mb-2">{postData.post_title}</h3>
          <p>{postData.post_txt}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ViewPost;