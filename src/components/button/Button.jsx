import { Button } from "flowbite-react";

function ButtonText({ text }) {
  return (
    <Button gradientDuoTone="pinkToOrange" size="xl">
      {text}
    </Button>
  );
}

export default ButtonText;
