import React from "react";

function TestimonyCard({ header, content }) {
  return (
    <div class="w-[360px] h-[10rem] border border-white rounded-[10px] text-white">
      <div class="p-[15px] ">
        <h5 class="font-bold mb-3  hover:cursor-pointer transition-all !text-white">
          {header}
        </h5>
        <p class="text-clip overflow-hidden">{content}</p>
      </div>
    </div>
  );
}

export default TestimonyCard;
