import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const DownBody = () => {
  return (
    <div className="down-body">
      <div className="container">
        <div id="action-button">
          <a href="/home" className="btn btn-primary">
            View Full Site
            <FaArrowCircleRight className="full-site" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownBody;
