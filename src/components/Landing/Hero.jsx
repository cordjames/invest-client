import SButton from "../button/SButton";
import ButtonText from "../button/Button";
import HeroCount from "./HeroCount";
import RButton from "../button/RButton";
import GbButton from "../button/GbButton";
import AxxCur from "./AxxCur";

function Hero({ data1, data2 }) {
  return (
    <div class="hero-container mx-auto bg-[#0C0E27] mt-2">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-[48%] p-6 sm:p-9">
          <h1
            class="mb-4 sm:mb-4 hero-h1 font-['Poppins'_sans-serif] text-[40px] text-white font-extrabold"
            id="cap"
          >
            Your Number One
            <br /> Investment Platform
          </h1>
          <p id="less-txt" mb-4 class="mb-4  text-[large]  hero-p text-white">
            With the latest Investment technology, Monitoring and trading of
            stocks and forex pairs are managed automatically and instantly, delivering the highest
            returns.
          </p>
          <p
            id="great-txt"
            class="font-bold md:!text-2xl text-xl hero-p text-white"
          >
            Invest STOCK CFDs, Stock Indices, Oil and Gold with
            leverage up to 888:1 and above
          </p>
          {/* <div class="">
            <div class="w-full flex md:max-w-[60%]">
              <span className="pr-4">
                <ButtonText text="TRADE FX" />
              </span>
              <ButtonText text="CRYPTO TRADE" />
            </div>
          </div> */}
        </div>

        <div class="w-full md:w-[48%] p-6 sm:p-3">
          <h1 className="font-['Poppins'_sans-serif] text-[40px] text-white font-extrabold ">
            <span id="cap" className="font-extrabold">
              UNLIMITED
            </span>{" "}
            possibilities with <br />
            <span id="cap">TECHNOLOGY</span> that <span id="cap">EARN</span>s
            <br /> more <span id="cap">PROFITS</span>
          </h1>
          {/* <div class="hero-container">
            <p id="td-nw" className="hero-p">
              TRADE NOW <SButton text="Live" />
            </p>
          </div> */}
          {/* <HeroCount /> */}
          {/* <div class="flex flex-wrap items-center justify-between md:max-w-[76%]">
            <div class=" mb-1 mt-2">
              <RButton text="BTC/STOCKS/INDICES" />
            </div>
            <div class="">
              <GbButton text="CRYPTO TRADE" />
            </div>
          </div> */}
          {/* <AxxCur /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
