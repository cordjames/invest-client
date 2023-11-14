import tra from "../../assets/tra.png";

function TextImageBottom() {
  return (
    <div class="text-center container mx-auto mb-28">
      <h4 class="font-bold text-3xl text-[#fff] relative pb-2 mb-5 before:left-[46%]  before:bg-white before:bottom-0 before:content-[''] before:h-[2px] before:absolute before:w-[80px] before:m-0">
        How it Works?
      </h4>
      <p class="text-white mb-5">
        Ascente is a company that helps retail and institutional investors to make smart trades. 
        They aim to execute on the best trading platforms
        with access to low-cost pricing, reliable trading infrastructure, fast
        execution, and exceptional client support 1.
      </p>
      <img src={tra} alt="" />
    </div>
  );
}

export default TextImageBottom;
