import React from "react";

export const Gif = (props) => (
  <div>
    <img
      className="img"
      src={`${props.result["media_formats"]["gif"]["url"]}`}
      style={{ height: "200px", width: "300px" }}
      alt="help"
    />
  </div>
);
