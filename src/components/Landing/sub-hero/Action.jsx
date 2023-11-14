import React from "react";
import RButton from "../../button/RButton";

function Action({ header, content, noBtn }) {
  return (
    <section className="px-[15px] mb-4">
      <h4 className="font-bold text-3xl text-white relative pb-2 mb-5 before:left-[0]">
        {header}
      </h4>
      {Array.isArray(content) ? (
        content.map((item) => (
          <p key={item} className="text-white mb-5">
            {item}
          </p>
        ))
      ) : (
        <p className="text-white mb-5">{content}</p>
      )}
      {/* if i don't want the button */}
      {/* {!noBtn && <RButton text="Get started" />} */}
    </section>
  );
}

export default Action;
