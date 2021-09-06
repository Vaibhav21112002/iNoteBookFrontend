import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s = {
    name: "Vaibhav",
    class: "EE4",
  };
  const [state, setState] = useState(s);
  return (
    <NoteContext.Provider value={{ state }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
