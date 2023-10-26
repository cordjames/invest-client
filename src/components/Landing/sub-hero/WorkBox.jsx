import React from "react";

function WorkBox({ header, content }) {
  return (
    <div class="lg:max-w-[50%] font-bold flex lg:px-[15px] mb-4">
      <div class="mr-4 w-4">
        <img src="" alt="" />
      </div>
      <div class="lg:px-[15px]">
        <h4 class="text-[1.5rem] mb-[1rem] text-[#7a7a7a]">{header}</h4>
        <p class="text-[#7a7a7a]">{content}</p>
      </div>
    </div>
  );
}

export default WorkBox;
