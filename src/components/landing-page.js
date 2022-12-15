import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Postview from "./postview/postview";
import Upload from "./Upload/upload";

export default function LandingPage() {
  return (
    <div>
      {/* <button>
        <a href="/postview">Enter</a>
      </button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/postview" element={<Postview />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
