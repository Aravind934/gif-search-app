import React from "react";

export const Gif = (props) => (
  <div className="videos__item">
    <div className="video__image">
      <img
        src={`${props.result["media_formats"]["gif"]["url"]}`}
        style={{ height: "200px", width: "300px" }}
        alt="help"
      />
    </div>
  </div>
);
