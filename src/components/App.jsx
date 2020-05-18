import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";
export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(term  => (
        <Entry
          key={term.id}
          emoji={term.emoji}
          name={term.name}
          meaning={term.meaning}
    />))}
    </dl>
    </div>
  );
}
