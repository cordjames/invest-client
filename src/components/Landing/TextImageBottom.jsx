import tra from "../../assets/tra.png";

function TextImageBottom() {
  return (
    <div class="text-center container mx-auto mb-28">
      <h4 class="font-bold text-3xl text-[#fff] relative pb-2 mb-5 before:left-[46%]  before:bg-white before:bottom-0 before:content-[''] before:h-[2px] before:absolute before:w-[80px] before:m-0">
        How it Works?
      </h4>
      <p class="text-white mb-5">
      Ascente is a financial services firm that provides retail and institutional investors with the tools and support they need to make smart trades. We focus on providing access to the best trading platforms, low-cost pricing, reliable trading infrastructure, fast execution, and exceptional client support.<br/>

We are committed to providing our clients with the best possible value, which is why we offer low-cost pricing on their trading platforms and execution services. This can save clients a significant amount of money over time.<br/>

Ascente has a robust trading infrastructure that is designed to ensure that our traders can always execute their trades quickly and efficiently. This is critical for traders who need to be able to take advantage of market opportunities quickly.<br/>

Ascente's trading platform is designed for fast execution, which means our traders can get their trades filled quickly and efficiently. This is important for traders who need to be able to enter and exit positions quickly.<br/>

Ascente is committed to providing its clients with exceptional customer support. Our team of experienced professionals is available to answer questions, provide guidance, and troubleshoot any problems that our investors may encounter.<br/>
      </p>
      <img src={tra} alt="" />
    </div>
  );
}

export default TextImageBottom;
