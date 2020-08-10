import React from "react";

export default function Crad(props) {
  //draggable element triggred once dragged
  const dragStart = e => {
    //while dragging get the target dragged element first
    const target = e.target;
    console.log("DragStart", target);

    //set target id and data the one which is dragging
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  //dargOver triggered jus to stay with in the func
  const dragOver = e => {
    // stopping card overload card on card
    e.stopPropagation();
    // e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
