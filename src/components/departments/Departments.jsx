import React from "react";
import { Link } from "react-router-dom";
import "./departments.css";

import departmentItems from "../../config/departments.json";

export default function Departments() {
  return <div className="departments-container">
    {
    departmentItems.map((content) => (
      <Link key={content.id} className="departments-button" to={content.route}>
        <img
          src={content.image.url}
          alt={content.image.alt}
        />
        <p id="department-button-title">{content.image.alt}</p>
      </Link>
    ))
    }
  </div>;
}
