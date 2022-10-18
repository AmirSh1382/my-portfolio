import React from "react";

// React-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import MyWork from "./components/MyWork";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </Layout>
  );
};

export default App;