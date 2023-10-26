import { Button } from "flowbite-react";

function GbButton({ text }) {
  return (
    <Button
      size="xl"
      pill
      gradientDuoTone="pinkToOrange"
      outline
      className="!bg-inherit"
    >
      {text} &#8594;
    </Button>
  );
}

export default GbButton;
