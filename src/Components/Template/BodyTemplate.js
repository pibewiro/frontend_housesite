import React from "react";

export default function BodyTemplate(props) {
  return (
    <div>
      <h1>Template</h1>
      {props.children}
    </div>
  );
}
