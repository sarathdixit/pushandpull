import React from "react";

export default function ScrollText({ text }) {
  return (
    <div class="scrolling_text">
      <div class="text">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div class="text">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
