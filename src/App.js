import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
