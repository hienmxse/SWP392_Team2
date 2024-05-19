import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeUser from './User/Pages/HomeUser.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './User/Pages/Login.jsx';
import Register from './User/Pages/Register.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='' element={<Login></Login>}></Route>
        <Route path='user' element={<HomeUser></HomeUser>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
  </BrowserRouter>
)
