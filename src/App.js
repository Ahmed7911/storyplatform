
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
// import SignUp from "./SignUp";
import Levels from "./Levels";
import StoryEditor from "./StoryEditor";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/SignUp" element={<SignUp />} />*/}
        <Route path="/Levels" element={<Levels />} />
        <Route path="/StoryEditor" element={<StoryEditor />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
}
