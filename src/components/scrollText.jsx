import React from "react";

export default function ScrollText({ text }) {
  return (
    <div id="rssBlock">
      <p class="cnnContents">
        <span class="marqueeStyle">&nbsp;{text}</span>
        <span class="marqueeStyle2">
          &nbsp;{text}
          4&nbsp;
        </span>
      </p>
    </div>
  );
}
