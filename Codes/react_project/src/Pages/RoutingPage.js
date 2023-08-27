import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import TestCase01 from "../TestCase01/TestCase01";

export default function RoutingPage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="*" element={<ErrorPage />}></Route>
        <Route exact path="/test1" element={<TestCase01 />}></Route>
      </Routes>
    </div>
  );
}
