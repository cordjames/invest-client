import React from "react";
import { Button } from "flowbite-react";

function SButton({ text }) {
  return (
    <Button color="pinkToOrange" class="rounded-full" size="xs">
      {" "}
      {text}{" "}
    </Button>
  );
}

export default SButton;
