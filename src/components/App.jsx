import React from "react";
import emojipedia from "../emojipedia.js";
import createEntry from "./createEntry";

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}
