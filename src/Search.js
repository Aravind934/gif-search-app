import React, { useState } from "react";

export const Search = (props) => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="search">
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter keywords to search gif's"
        />
        <button
          disabled={!text.length}
          onClick={() => props.setSearchText(text)}
        >
          Get gif's
        </button>
      </div>
    </div>
  );
};
