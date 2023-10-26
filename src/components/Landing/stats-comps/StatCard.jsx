import React from "react";

function StatCard({ cardContent, cardHeader }) {
  return (
    <div class="w-full lg:max-w-[16.66667%] sm:max-w-[33.33333%] max-w-[50%] card-container">
      <div class="px-[15px]">
        <div class="p-[15px]">
          <h1 class="!font-[#0c0e27] font-bold">{cardHeader}</h1>
          <p class="text-[1rem] font-[#0c0e27]">{cardContent}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
