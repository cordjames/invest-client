import React from "react";
import FaqCard from "./FaqCard";

function FaqContainer({ data1, data2 }) {
  return (
    <div class=" text-white container mx-auto mb-28">
      <h4 class="font-bold text-3xl text-[#fff] relative pb-2 mb-5 before:left-[46%] text-center before:left-[46%]  before:bg-white before:bottom-0 before:content-[''] before:h-[2px] before:absolute before:w-[80px] before:m-0">
        Frequently Asked Questions?
      </h4>
      <div class="flex flex-wrap">
        <div class="md:w-1/2 px-[15px]">
          {data1.map((item, index) => {
            return (
              <FaqCard
                header={item.header}
                content={item.content}
                key={index}
              />
            );
          })}
        </div>
        <div class="md:w-1/2 px-[15px]">
          {data2.map((item, index) => {
            return (
              <FaqCard
                header={item.header}
                content={item.content}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FaqContainer;
