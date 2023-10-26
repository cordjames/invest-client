import React from "react";

function FaqCard({ header, content }) {
  function handleClick(event) {
    const nextElement = event.target.nextElementSibling;
    console.log(nextElement);
    if (nextElement) {
      nextElement.classList.toggle("hidden");
    }
  }

  return (
    <div class="mb-3">
      <h5
        onClick={handleClick}
        class=" text-white border border-white font-bold p-[15px] rounded-md before:content-['Q._'] cursor-pointer"
      >
        {header}
      </h5>
      <div class="border border-white p-[15px] rounded-b-md before:content-['A.'] before:pr-3 hidden">
        {content}
      </div>
    </div>
  );
}

export default FaqCard;
