import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./User/Pages/Login.jsx";
import Register from "./User/Pages/Register.jsx";
import Home from "./User/Pages/Home.jsx";


import PostContent from "./User/Component/PostContent.jsx";
import UserDetail from "./User/Pages/UserDetail.jsx";
import AppointmentSchedule from "./User/Pages/AppoimentSchedule.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home></Home>}>
          <Route path="post-content" element={<PostContent></PostContent>}></Route>
          <Route path="user-detail" element={<UserDetail></UserDetail>}></Route>
          <Route path="appointment-schedule" element={<AppointmentSchedule></AppointmentSchedule>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);
