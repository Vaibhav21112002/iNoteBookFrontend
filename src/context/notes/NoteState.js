import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6134659cf1d1b5fa9bc08d64",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my udpated notes",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-05T06:37:16.162Z",
      __v: 0,
    },
    {
      _id: "6135ee4a444a274ab6763f58",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:42.346Z",
      __v: 0,
    },
    {
      _id: "6135ee4c444a274ab6763f5a",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:44.240Z",
      __v: 0,
    },
    {
      _id: "6135ee4e444a274ab6763f5c",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:46.080Z",
      __v: 0,
    },
    {
      _id: "6135ee4e444a274ab6763f5c",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:46.080Z",
      __v: 0,
    },
    {
      _id: "6135ee4e444a274ab6763f5c",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:46.080Z",
      __v: 0,
    },
    {
      _id: "6135ee4e444a274ab6763f5c",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:46.080Z",
      __v: 0,
    },
    {
      _id: "6135ee4e444a274ab6763f5c",
      user: "61342f381b2de41629044ec1",
      title: "this is the title of my note",
      description:
        "LoremIf you are an engineering student, aiming for placements, internship, masters, then your seniors are here to guide you to perfection through GEEKHOUSE.",
      tag: "General",
      date: "2021-09-06T10:32:46.080Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
