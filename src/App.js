import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Home from "./Components/Home";
import Head from "./Components/Head";
import axios from "axios";
import { useParams } from "react-router-dom";
function App() {
  const [details, setDetails] = useState([]);
  const getDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/Users/get/${id}`);
      setDetails(response.data);
    } catch (e) {
      alert("getDetails erro" + e);
    }
  };
  return (
    <>
      <Head details={details}/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/:id" element={<Home getDetails={getDetails} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
