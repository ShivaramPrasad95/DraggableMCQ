import React from "react";

export default function Board(props) {
  // when we drop something
  const drop = e => {
    e.preventDefault();

    var droppingId = e.target.id;
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";

    // on Board it get's disappear
    console.log("Dropping from Board", droppingId);
    if (droppingId === "board-1" && card_id === "card-100") {
      console.log("Dropping in to the Board");
      e.target.appendChild(card);
    }

    if (droppingId === "board-4") {
      // e.target.appendChild()
      console.log("for answers", droppingId);
    }

    //to store it locally
    // console.log("CheckitsStored", localStorage.setItem("card", props.children));
  };

  const dragOver = e => {
    // allows us to continue with the dropping func
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {/* cards is basically children here */}
      {props.children}
    </div>
  );
}
