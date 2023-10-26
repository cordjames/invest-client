import { Button } from "flowbite-react";

function RButton({ text }) {
  return (
    <Button gradientDuoTone="pinkToOrange" size="xl" pill>
      {text} &#8594;
    </Button>
  );
}

export default RButton;
