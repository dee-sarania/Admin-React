import React from "react";
import Navbar from "./components/navbar.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Login/Login.jsx";
import DataTable from "./screen/Allposts/Allposts.jsx";
import PendingData from "./screen/PendingPost/PendingPost.jsx";
import ApprovedData from "./screen/ApprovedPosts/ApprovedPosts.jsx";
import RejectData from "./screen/RejectPosts/RejectPosts.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/posts" element={<DataTable />} />
          <Route path="/pending_posts" element={<PendingData />} />
          <Route path="/approved_posts" element={<ApprovedData />} />
          <Route path="/rejected_posts" element={<RejectData />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
