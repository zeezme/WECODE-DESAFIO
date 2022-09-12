import React from "react";
import { Link } from "react-router-dom";
import "./staticBanner.css";

export default function StaticBanner(props) {
  return (
    <Link to={props.route} className="staticBanner-container">
      <img src={props.image} alt={props.alt} />
      <div className="staticBanner-container-internal">
        <p>{props.title}</p>
      </div>
    </Link>
  );
}
