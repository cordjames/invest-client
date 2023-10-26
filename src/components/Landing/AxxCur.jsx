// import { Section, HeroHeader } from "flowbite-react";

import React from "react";

function AxxCur() {
  return (
    <section name="logos">
      <span>
        <h2 class="md:pl-16 my-5 font-bold text-left">
          <span id="acc-txt">We Accept :</span>
        </h2>
        <div class="flex flex-wrap justify-evenly dark:text-gray-400">
          {/* <!-- <div class="flex flex-wrap"> */}
          {/* <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"> --> */}
          {/* <!-- Content for column 1 --> */}
          <p id="acc-txt2">
            <i class="btc-icon" /> Bitcoin
          </p>
          <p id="acc-txt2">
            <i class="eth-icon" /> Ether
          </p>
          <p id="acc-txt2">
            <i class="ltc-icon" /> Litecoin
          </p>
          <p id="acc-txt2">
            <i class="rpl-icon" /> Ripple
          </p>
          {/* <!-- </div> -->
			<!-- <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
              
            </div> -->
			<!-- </div> --> */}
        </div>
      </span>
    </section>
  );
}

export default AxxCur;
