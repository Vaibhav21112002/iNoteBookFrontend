import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const NoteComponent = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row">
      <div className="row notes">
        {notes.map((note, index) => {
          return <NoteItem key={index} note={note} />;
        })}
      </div>
    </div>
  );
};

export default NoteComponent;
