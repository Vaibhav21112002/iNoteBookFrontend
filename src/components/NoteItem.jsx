import React from "react";

const NoteItem = (props) => {
  return (
    <div className="col-md-3">
      <div className="card border border-success my-3">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.description}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          <i className="fas fa-trash-alt mx-2"></i>
          <i className="fas fa-edit mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
