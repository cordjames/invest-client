import React from "react";
import Card from "./Card";

// const data = [
//   { header: "Account status", text: "Inactive" },
//   { header: "Account number", text: "9118872201" },
//   { header: "OPening Amount", text: "$4,800,000" },
//   { header: "Current Amount", text: "$97,000,000" },
// ];

function CardContainer({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return <Card header={item.header} text={item.text} />;
      })}
    </>
  );
}

export default CardContainer;
