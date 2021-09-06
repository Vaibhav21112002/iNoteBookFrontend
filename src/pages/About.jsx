import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
function About() {
  const a = useContext(noteContext);
  return (
    <div>
      About {a.state.name} is in the {a.state.class}
    </div>
  );
}

export default About;
