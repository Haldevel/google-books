import React from "react";
import "./style.css";
import ViewBtn from "../Viewbtn/view"

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <h2 className="ml-3 my-3">Results</h2>
      <ul className="list-group mx-2">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item">
    <div><h3>{props.title}</h3>
    <div>
    <ViewBtn link={props.link} />
    </div>
    </div>
    <div style={{ fontSize: '1.5rem' }}>{props.author}</div>
    <div className="d-flex flex-row">
      <div className="p-2">
        <img src={props.cover} alt="cover"></img>
      </div>
      <div>{props.synopsis}</div>
    </div>
  </li>;
}
