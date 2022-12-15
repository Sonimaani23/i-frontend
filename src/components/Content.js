import React from "react";
import { Link } from "react-router-dom";
import "./content.css";
function Content() {
  return (
    <div className="content">
      <div className="left">
        <img src="Capture.PNG" alt="side" />
      </div>
      <div className="right">
        <h3>10x Team-04</h3>
        <button>
          <Link className="link" to="/postview">Enter</Link>
        </button>
      </div>
    </div>
  );
}

export default Content;
