import React from 'react'
import Entry from "./Entry.jsx";


export default function createEntry(term) {
  return (
    <Entry
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      meaning={term.meaning}
    />
  );
}