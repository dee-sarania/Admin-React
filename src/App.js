import React from "react";
import Navbar from "./components/navbar.jsx";
import DataTable from "./screen/Allposts/Allposts.jsx";
import ApprovedData from "./screen/ApprovedPosts/ApprovedPosts.jsx";
import PendingData from "./screen/PendingPost/PendingPost.jsx";
import RejectData from "./screen/RejectPosts/RejectPosts.jsx";

function App() {
  return (
    <div>
      {/* <DataTable /> */}
      <ApprovedData />
      {/* <PendingData />
      <RejectData/> */}
    </div>
  );
}

export default App;
