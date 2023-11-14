import sale from "../../assets/sale-proceeds2.png";
import distribution from "../../assets/distribution2.png";

function AnalyticsImages() {
  return (
    <div class="flex flex-wrap container mx-auto my-36">
      <div class="md:w-1/2 mx-auto w-full mb-10">
        <div class="mx-auto w-fit px-[15px]">
          <h4 class="font-bold text-3xl text-[#5957cd] relative pb-2 mb-14 before:left-[27%] before:bg-[#5957cd] before:bottom-0 before:content-[''] before:absolute before:right-0 before:w-[80px] before:m-0 ">
            STOCKS/ INDICES
          </h4>
          <img src={sale} alt="" class="max-w-full" />
        </div>
      </div>
      {/* <div class="md:w-1/2 mx-auto">
        <div class="mx-auto w-fit px-[15px]">
          <h4 class="font-bold text-3xl text-[#5957cd] relative pb-2 mb-14 before:left-[40%] text-center">
            CRYPTO TRADE
          </h4>
          <img src={distribution} alt="" class="max-w-full" />
        </div>
      </div> */}
    </div>
  );
}

export default AnalyticsImages;
