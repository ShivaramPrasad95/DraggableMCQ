import React from "react";

export default function QuestionBoard(props) {
  // want to perform some useState actions

  // when we drop something
  const drop = e => {
    e.preventDefault();
    // cards can move around using only its card_id
    const card_id = e.dataTransfer.getData("card_id");
    var droppingId = e.target.id;

    const card = document.getElementById(card_id);
    console.log("from QB::", card);
    card.style.display = "block";

    // drop this new card onto the board div
    if (
      (card_id === "card-1" && droppingId === "_qn1") ||
      (card_id === "card-3" && droppingId === "_qn3") ||
      (card_id === "card-2" && droppingId === "_qn2")
    ) {
      e.target.appendChild(card);
    }
  };

  const dragOver = e => {
    // allows us to continue with the dropping func
    e.preventDefault();
  };

  return (
    <div className={props.className}>
      {/* questions */}
      <p id="_qn1" className="drag1" onDrop={drop} onDragOver={dragOver} />
      <span className="qn1">is a name of the memory location.</span>
      <br />
      <p id="_qn2" className="drag1" onDrop={drop} onDragOver={dragOver} />
      <span className="qn1">are non-executable statements.</span>
      <br />
      <p id="_qn3" className="drag1" onDrop={drop} onDragOver={dragOver} />
      <span className="qn1">sign is used with string variables.</span>
      <br />
    </div>
  );
}
