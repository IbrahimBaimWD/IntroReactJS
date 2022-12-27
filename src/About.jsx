import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="App-header">
        <p>About</p>
        <Link to="/" className="App-link">
          Back to Home
        </Link>
      </div>
    </>
  );
}
